let ex = [1,3,5,7,8,9]

/*for(let pos = 0 ; pos < ex.length ; pos++ ){
    console.log(`Meu vetor na posição ${pos} tem o valor ${ex[pos]}`)
}
    */

for (let pos in ex){
    console.log(`Meu vetor na posição ${pos} tem o valor ${ex[pos]}`)
}