function gerar() {
    let num = document.querySelector('input#num').value
    let tab = document.querySelector('select#seltab')
    let valor = parseInt(num)
    if(isNaN(valor)){
        alert('Digite um número entre 1 e 9.')
    } else {
        let i = 1
        tab.innerHTML = ''
        while(i <= 10){
            let item = document.createElement('option')
            item.text = `${valor} x ${i} = ${valor*i}`
            tab.appendChild(item)
            i++
        }
    }
}