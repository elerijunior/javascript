function reajust(){
    let nome = window.prompt(`Qual é o nome do funcionário?`)
    let sal = window.prompt(`Qual é o salário de ${nome}?`)
    let valor = parseFloat(sal)
    let res = window.document.querySelector('p#res')
    let porc = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    let porcReal = parseFloat(porc)
    let valorp = (porcReal/100) * valor
    if( valor <=0 || isNaN(valor) ){
        window.alert(`Digite um valor maior que 0 para o salário.`)
    } else if(valor >=1){
        res.innerHTML = `<strong>${nome} recebeu um aumento salarial!</strong><p>O salário atual era de R$ ${valor}.</p><p>Com um aumento de ${porcReal}%, o salário vai aumentar R$${valorp}, no prócimo mês.</p><p>E a partir daí, ${nome} vai passar a aganhar R$ ${valor + valorp}.</p>`
    }

}