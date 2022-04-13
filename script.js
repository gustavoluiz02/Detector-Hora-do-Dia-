function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    var footer = window.document.getElementById(`footer`)
    var title = window.document.getElementById(`title`)
    msg.innerHTML =`Agora são ${hora}:${minutes} horas.`
    if (hora >= 0 && hora < 12){
        img.src = `imgs/manhã.jpg`
        window.document.body.style.background = `#F0E68C`
        footer.style.color = `black`
        title.style.color = `black`
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imgs/tarde.jpg'
        window.document.body.style.background = `#F4A460`
    }else {
        img.src = 'imgs/noite.jpg'
        window.document.body.style.background = `#1C1C1C`
    }
}
