function contar(){
    var ini = window.document.querySelector('input#ini')
    var fim = window.document.querySelector('input#fim')
    var incre = window.document.querySelector('input#incre')
    var res = window.document.querySelector('div#res')
    if(ini.value.length == 0 || fim.value.length == 0 || incre.value.length == 0){
        res.innerHTML = 'Impossível contar...'
    }
    for (var i = ini; i <= fim; i = incre){
        res.innerHTML = `<p>Contando:</p>\n${res}...`
    }
}