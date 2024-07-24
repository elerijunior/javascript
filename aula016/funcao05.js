// função recursiva (chama ela msm até o valor n)
function fatorial(n){
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))
// n = 5

5* (5 - 1)