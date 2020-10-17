
/*function time (n,m){
    arr=[]
    for (let i=n; i<=m; i++){
        arr.push(i)}
    let array=setInterval(function (){
        if (arr.length===0) {
            clearInterval(array);
        }else console.log(arr.shift())
    },1000)
}
time(5,10)*/


function timer (n,m){
    let time=setInterval(function (){
        console.log (n)
        n>=m?clearInterval(time):n++
    },1000)
}
timer(5,9)