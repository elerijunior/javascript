function contar(){
    //acesso valores(.value) digitado pelo inimigo
    let ini = window.document.querySelector('input#txti').value
    let fim = window.document.querySelector('input#txtf').value
    let pas = window.document.querySelector('input#txtp').value
    let res = window.document.querySelector('div#res')
    //transformo os dados dos inimigo em numeros inteiros
    let numI = parseInt(ini)
    let numF = parseInt(fim)
    let numP = parseInt(pas)
    // verifico se a anta não deixou nada em branco
    if(isNaN(numI) || isNaN(numF)|| isNaN(numP)){
        alert(`Está faltando dados. Por favor preencha os campos corretamente.`)
    }
        res.innerHTML = `Contando...<br>`
        //executa a contagem de forma progressiva
        if( numI <= numF){
            for(let i = numI; i <= numF ; i = i + numP){ 
                res.innerHTML += `${i} \u{1F449}`
            }
        //executa a contagem de forma decrescente    
        } else {
            for(let i = numI; i >= numF ; i = i - numP){
                res.innerHTML += `${i} \u{1F449}`
            }
    }
}