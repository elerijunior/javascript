function desc(){
    let prod = window.prompt('Qual é o produto que você está comprando?')
    let valor = window.prompt(`Qual o preço de ${prod}?`)
    let preç = parseFloat(valor)
    let desconto = preç / 10
    let valorf = valor - desconto
    let res = window.document.querySelector('div#res')
    if(preç <= 0 || isNaN(preç)){
        window.alert('Digite um valor real acima de 0.')
    } else if (preç >= 1){
        res.innerHTML = `<strong>Calculando desconto de 10% para ${prod}</strong>...<p>O preço original era R$ ${preç}.</p><p>Você acaba de ganhar R$ ${desconto} de desconto (-10%).</p><p>No fim, você vai pagar R$ ${valorf} no produto ${prod}.`
    }
}