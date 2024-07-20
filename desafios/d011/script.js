function veri(){
    let num = window.prompt('Qual é o ano que você quer verificar?')
    let res = window.document.querySelector('div#res')
    let ano = parseInt(num)
    res.innerHTML = `<strong>Analizando o ano de ${ano}...</strong>`
    if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
        res.innerHTML += `<br>O ano de ${ano} é <mark style="background-color: lightgreen;">BISSEXTO</mark> \u2705`;
    } else {
        res.innerHTML += `<br>O ano de ${ano} é <mark style="background-color: salmon;">NÃO É BISSEXTO</mark> \u274C`;
    }
    
}