var idade = 22
console.log(`Você tem ${idade} de idade.`)
if (idade < 16){
    console.log('Não Vota.')
} else if (idade < 18 || idade >= 65){
    console.log('Voto Opicional.')
}else{
    console.log('Voto Obrigatório.')
}