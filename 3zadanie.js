function sum(a){
    return function sum2(b){
         return a+b
    }
}
let result=sum(7)
console.log(result(3))

