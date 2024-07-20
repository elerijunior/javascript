function calc(){
    let a = window.prompt('Qual é o valor de a?')
    let b = window.prompt('Qual é o valor de b?')
    let c = window.prompt('Qual é o valor de c?')
    let a1 = parseInt(a)
    let b1 = parseInt(b)
    let c1 = parseInt(c)
    let del = b1**2 - 4*a*c1
    let res = document.querySelector('div#res')
    res.innerHTML = `<strong>Resolvendo Bhaskara</strong><p>A equação atual é <strong>${a1}x² + ${b1}x + ${c1} = 0</strong></p><p>O cálculo realizado será <strong>Delta = ${b1}² - 4 . ${a1} . ${c1}</strong></p><p>O valor calculado foi <strong>Delta = ${del}</strong></p>`
    //considerando que qualquer valor pode ser zero nas variaveis a b ou c, já que no mundo real qualquer um deles pode ser zero. Não a necessidade de condicionar o codigo.
}