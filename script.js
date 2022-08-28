function inverter(){

    var invert = document.getElementById('inverter')
    var pi = document.getElementById('pi')
    var imgi = document.getElementById('imgi')
    var headergray = document.getElementById('gray')
    var kids = document.getElementById('kids')
    var monster = document.getElementById('monstro')
    var main = document.getElementById('main')

    if(invert.className == 'normal'){
        invert.classList.toggle('invert')
        pi.classList.toggle('invertz')
        imgi.classList.toggle('invertz')
        kids.classList.toggle('defocus')
        monster.classList.remove('defocus')
        monster.classList.add('focus')
        headergray.style.filter = 'saturate(0)'
        headergray.style.opacity = '0.6'
        main.style.backgroundImage = 'var(--cor-normal)'

    } else {
        invert.classList.remove('invert')
        invert.classList.add('normal')
        pi.classList.remove('invertz')
        pi.classList.add('normal')
        imgi.classList.remove('invertz')
        imgi.classList.add('normal')
        kids.classList.remove('defocus')
        kids.classList.add('focus')
        monster.classList.remove('focus')
        monster.classList.add('defocus')
        headergray.style.filter = 'saturate(1)'
        headergray.style.opacity = '1'
        main.style.backgroundImage = 'var(--cor-gradiente)'


    }
}