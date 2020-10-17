function primeNumDef (num){
let k=0
     if (num===0||num===1||num>1000) {
         console.log(`Введено некорректное число ${num}.Пожалуйста введите значение от 2 до 1000`)
         }else{for (let i = 2; i < num - 1; i++)
                 if (num % i === 0)
                     k++
           }
     k === 0?console.log(`${num} является простым числом.`):console.log(`${num} не является простым числом.`)
    return k === 0;
}
primeNumDef(97)
