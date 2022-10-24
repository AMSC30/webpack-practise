/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const memoize = require("./util/memoize");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./DependenciesBlock")} DependenciesBlock */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("./ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @typedef {Object} UpdateHashContext
 * @property {ChunkGraph} chunkGraph
 * @property {RuntimeSpec} runtime
 * @property {RuntimeTemplate=} runtimeTemplate
 */

/**
 * @typedef {Object} SourcePosition
 * @property {number} line
 * @property {number=} column
 */

/**
 * @typedef {Object} RealDependencyLocation
 * @property {SourcePosition} start
 * @property {SourcePosition=} end
 * @property {number=} index
 */

/**
 * @typedef {Object} SyntheticDependencyLocation
 * @property {string} name
 * @property {number=} index
 */

/** @typedef {SyntheticDependencyLocation|RealDependencyLocation} DependencyLocation */

/**
 * @typedef {Object} ExportSpec
 * @property {string} name the name of the export
 * @property {boolean=} canMangle can the export be renamed (defaults to true)
 * @property {boolean=} terminalBinding is the export a terminal binding that should be checked for export star conflicts
 * @property {(string | ExportSpec)[]=} exports nested exports
 * @property {ModuleGraphConnection=} from when reexported: from which module
 * @property {string[] | null=} export when reexported: from which export
 * @property {number=} priority when reexported: with which priority
 * @property {boolean=} hidden export is not visible, because another export blends over it
 */

/**
 * @typedef {Object} ExportsSpec
 * @property {(string | ExportSpec)[] | true | null} exports exported names, true for unknown exports or null for no exports
 * @property {Set<string>=} excludeExports when exports = true, list of unaffected exports
 * @property {Set<string>=} hideExports list of maybe prior exposed, but now hidden exports
 * @property {ModuleGraphConnection=} from when reexported: from which module
 * @property {number=} priority when reexported: with which priority
 * @property {boolean=} canMangle can the export be renamed (defaults to true)
 * @property {boolean=} terminalBinding are the exports terminal bindings that should be checked for export star conflicts
 * @property {Module[]=} dependencies module on which the result depends on
 */

/**
 * @typedef {Object} ReferencedExport
 * @property {string[]} name name of the referenced export
 * @property {boolean=} canMangle when false, referenced export can not be mangled, defaults to true
 */

const TRANSITIVE = Symbol("transitive");

const getIgnoredModule = memoize(() => {
	const RawModule = require("./RawModule");
	return new RawModule("/* (ignored) */", `ignored`, `(ignored)`);
});

class Dependency {
	constructor() {
		this._parentModule = undefined;
		this._parentDependenciesBlock = undefined;
		this._parentDependenciesBlockIndex = -1;
		this.weak = false;
		this.optional = false;
		this._locSL = 0;
		this._locSC = 0;
		this._locEL = 0;
		this._locEC = 0;
		this._locI = undefined;
		this._locN = undefined;
		this._loc = undefined;
	}

	
	get type() {
		return "unknown";
	}

	
	get category() {
		return "unknown";
	}

	
	get loc() {
		if (this._loc !== undefined) return this._loc;
		const loc = {};
		if (this._locSL > 0) {
			loc.start = { line: this._locSL, column: this._locSC };
		}
		if (this._locEL > 0) {
			loc.end = { line: this._locEL, column: this._locEC };
		}
		if (this._locN !== undefined) {
			loc.name = this._locN;
		}
		if (this._locI !== undefined) {
			loc.index = this._locI;
		}
		return (this._loc = loc);
	}

	set loc(loc) {
		if ("start" in loc && typeof loc.start === "object") {
			this._locSL = loc.start.line || 0;
			this._locSC = loc.start.column || 0;
		} else {
			this._locSL = 0;
			this._locSC = 0;
		}
		if ("end" in loc && typeof loc.end === "object") {
			this._locEL = loc.end.line || 0;
			this._locEC = loc.end.column || 0;
		} else {
			this._locEL = 0;
			this._locEC = 0;
		}
		if ("index" in loc) {
			this._locI = loc.index;
		} else {
			this._locI = undefined;
		}
		if ("name" in loc) {
			this._locN = loc.name;
		} else {
			this._locN = undefined;
		}
		this._loc = loc;
	}

	setLoc(startLine, startColumn, endLine, endColumn) {
		this._locSL = startLine;
		this._locSC = startColumn;
		this._locEL = endLine;
		this._locEC = endColumn;
		this._locI = undefined;
		this._locN = undefined;
		this._loc = undefined;
	}

	
	getContext() {
		return undefined;
	}

	getResourceIdentifier() {
		return null;
	}

	 
	couldAffectReferencingModule() {
		return TRANSITIVE;
	}

	
	getReference(moduleGraph) {
		throw new Error(
			"Dependency.getReference was removed in favor of Dependency.getReferencedExports, ModuleGraph.getModule and ModuleGraph.getConnection().active"
		);
	}

	
	getReferencedExports(moduleGraph, runtime) {
		return Dependency.EXPORTS_OBJECT_REFERENCED;
	}

	
	getCondition(moduleGraph) {
		return null;
	}
	getExports(moduleGraph) {
		return undefined;
	}

	
	getWarnings(moduleGraph) {
		return null;
	}

	
	getErrors(moduleGraph) {
		return null;
	}

	
	updateHash(hash, context) {}

	
	getNumberOfIdOccurrences() {
		return 1;
	}

	
	getModuleEvaluationSideEffectsState(moduleGraph) {
		return true;
	}

	
	createIgnoredModule(context) {
		return getIgnoredModule();
	}

	serialize({ write }) {
		write(this.weak);
		write(this.optional);
		write(this._locSL);
		write(this._locSC);
		write(this._locEL);
		write(this._locEC);
		write(this._locI);
		write(this._locN);
	}

	deserialize({ read }) {
		this.weak = read();
		this.optional = read();
		this._locSL = read();
		this._locSC = read();
		this._locEL = read();
		this._locEC = read();
		this._locI = read();
		this._locN = read();
	}
}

/** @type {string[][]} */
Dependency.NO_EXPORTS_REFERENCED = [];
/** @type {string[][]} */
Dependency.EXPORTS_OBJECT_REFERENCED = [[]];

Object.defineProperty(Dependency.prototype, "module", {
	/**
	 * @deprecated
	 * @returns {never} throws
	 */
	get() {
		throw new Error(
			"module property was removed from Dependency (use compilation.moduleGraph.getModule(dependency) instead)"
		);
	},

	/**
	 * @deprecated
	 * @returns {never} throws
	 */
	set() {
		throw new Error(
			"module property was removed from Dependency (use compilation.moduleGraph.updateModule(dependency, module) instead)"
		);
	}
});

Object.defineProperty(Dependency.prototype, "disconnect", {
	get() {
		throw new Error(
			"disconnect was removed from Dependency (Dependency no longer carries graph specific information)"
		);
	}
});

Dependency.TRANSITIVE = TRANSITIVE;

module.exports = Dependency;
