function conv(){
    let ent = window.prompt('Digite uma temperatura em *C (Celsius)')
    let cel = parseFloat(ent)
    let res = window.document.querySelector('p#res')
    let kel = cel + 273.15
    let fah = cel * (9/5) + 32

    if(cel <= 0 || isNaN(cel) ){
        window.alert(`Digite um valor válido`)
    } else if( cel >= 1){
        res.innerHTML = `<strong>A temperatura de ${cel}*C,corresponde a...</strong><p>${kel}*K (Kelvin)</p><p>${fah}*F(Fahrenheit)`
    } 
}