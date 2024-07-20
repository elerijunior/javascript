function check(){
    var entr = window.prompt(`Digite uma distância em metros(m)`)
    let res = window.document.getElementById('res')
    var metros = parseFloat(entr)
    let km = metros / 1000
    let cm = metros * 100
    let dm = metros * 10
    if(metros <= 0 || isNaN(metros) ){
        window.alert('Digite um valor válido')
    } else if (metros >= 1){
        res.innerHTML = `A distância de ${metros} metros, corresponde a...<p>${km} quilometros (KM)</p><p>${cm} centimetros (cm)</p><p>${dm} decimentros (dm)</p>`
      
    }
}