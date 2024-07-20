let cont = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora ?')
function conver(){
    let cart = window.prompt('Quantos R$ você tem na carteira?')
    let valor = parseFloat(cart)
    let res = window.document.getElementById('res')
    if( valor <=0 || isNaN(valor)){
        window.alert('Digite um valor válido')
    } else if(valor >= 1){
        valor = cont * valor
        res.innerHTML = `O valor de ${cart} reais, convertido em US$ é ${valor} dolares.`
    }
}
