let num = [2,5,4,6,7]
num.push(3) // adiciona um elemento ao vetor
//num.sort() // organiza o vetor em ordem crescente
console.log(`O vetor tem ${num.length} posições`)// informa o comprimento do vetor
console.log(`Meu vetor é ${num}`)
console.log(`O vetor primeiro valor do meu vetor é ${num[0]}`) // acessa o elemento do vetor pelo indice entre []

let pos = num.indexOf(6)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor está no indice ${pos}`)
}