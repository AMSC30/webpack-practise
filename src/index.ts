function createHello(name: string = 'webpack') {
    const div = document.createElement('div')
    div.innerHTML = `hello ${name}`
    document.body.append(div)
}
createHello('tom')
