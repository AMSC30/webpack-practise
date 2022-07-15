import _ from 'lodash'

export function numToWord(num) {
    return _.reduce(
        numRef,
        (accum, ref) => {
            return ref.num === num ? ref.word : accum
        },
        ''
    )
}

export function wordToNum(word) {
    return _.reduce(
        numRef,
        (accum, ref) => {
            return ref.word === word && word.toLowerCase() ? ref.num : accum
        },
        -1
    )
}
