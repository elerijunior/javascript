function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Digite um ano válido')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-masculino.png')
            } else if(idade <= 20){
                img.setAttribute('src', 'jovem-masculino.png')
            } else if(idade <= 50){
                img.setAttribute('src', 'adulto-masculino.png')
            }else {
                img.setAttribute('src', 'idoso-masculino.png')
            }
        }
        if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-feminino.png')
            } else if(idade <= 20){
                img.setAttribute('src', 'jovem-feminino.png')
            } else if(idade <= 50){
                img.setAttribute('src', 'adulto-feminino.png')
            }else {
                img.setAttribute('src', 'idoso-feminino.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}