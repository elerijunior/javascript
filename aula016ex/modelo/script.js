let num = document.querySelector('input#txtn')
let lis = document.querySelector('select#void')
let res = document.querySelector('div#res')
let vet = []

function number(n){ //verificar se é um número.
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function talista(n, l){ // verficar se já está na lista.
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function ad(){
    if(number(num.value) && !talista(num.value, vet)){
        
    }
}

