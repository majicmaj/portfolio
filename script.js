let consoleWindow = document.body.querySelector('.console')
let inline = document.body.querySelector('.inline')
let input = document.querySelector('.input')
let homeLine = `<span class="green">MajdTarbin@Ubuntu</span>:<span class="blue">~/home</span>$ cd ..`
let blogLine = `<span class="green">MajdTarbin@Ubuntu</span>:<span class="blue">~/home</span>$ cd blog`
let galleryLine = `<span class="green">MajdTarbin@Ubuntu</span>:<span class="blue">~/home</span>$ cd gallery`
let contactLine = `<span class="green">MajdTarbin@Ubuntu</span>:<span class="blue">~/home</span>$ cd contact`
let project1Line = `<span class="blue">Rocket Ball</span> &nbsp; <span class="blue">Other</span>`
let pwd = 'home'
let nac = ['Command not found.', 'Try: cd home']

window.onload = function () {
    document.querySelector('.input').focus();
}
document.body.addEventListener('click', () => {
    document.querySelector('.input').focus();
})
document.body.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
        switch (input.value) {
            case 'gallery':
                input.value = ''
                openGallery()
                break;
            case 'pwd':
                console.log('PWD')
                input.value = ''
                logg(pwd)
                break;

            default:
                cnf()
                break;
        }
    }
})
cnf = () => {
    let line = document.createElement('P')
    let line2 = document.createElement('P')
    let line3 = document.createElement('P')
    line2.innerHTML = `<p>${nac[0]}</p>`
    line3.innerHTML = `<p>${nac[1]}</p>`
    line.innerHTML = consoleWindow.children[consoleWindow.children.length - 1].innerHTML.replace('<input class="input" type="text">', '') + ' ' + input.value
    consoleWindow.insertBefore(line, consoleWindow.children[consoleWindow.children.length - 1])
    consoleWindow.insertBefore(line2, consoleWindow.children[consoleWindow.children.length - 1])
    consoleWindow.insertBefore(line3, consoleWindow.children[consoleWindow.children.length - 1])
}
logg = (string) => {
    let line = document.createElement('P')
    let line2 = document.createElement('P')
    line2.innerHTML = `<p>${pwd}</p>`
    line.innerHTML = consoleWindow.children[consoleWindow.children.length - 1].innerHTML.replace('<input class="input" type="text">', '') + ' pwd'
    consoleWindow.insertBefore(line, consoleWindow.children[consoleWindow.children.length - 1])
    consoleWindow.insertBefore(line2, consoleWindow.children[consoleWindow.children.length - 1])
}
openGallery = () => {
    let line = document.createElement('P')
    let line2 = document.createElement('P')
    line.innerHTML = galleryLine
    line2.innerHTML = project1Line
    consoleWindow.insertBefore(line, consoleWindow.children[consoleWindow.children.length - 1])
    consoleWindow.insertBefore(line2, consoleWindow.children[consoleWindow.children.length - 1])
    consoleWindow.children[consoleWindow.children.length - 1].innerHTML = consoleWindow.children[consoleWindow.children.length - 1].innerHTML.replace('/home', '/home/gallery')
    pwd = 'home/gallery'
    inline = document.body.querySelector('.inline')
    input = document.querySelector('.input')
    document.querySelector('.input').focus();
}