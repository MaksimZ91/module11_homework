function numberOfEvenInArray(arr3) {
    let chet = 0
    let nechet = 0
    let nol = 0
    for (let i = 0; i < arr3.length; i++) {
        if (typeof arr3[i] === "number" && !isNaN(arr3[i])) {
            if (arr3[i] === 0) {
                nol++
            } else {
                arr3[i] % 2 === 0 ? chet++ : nechet++
            }
        }
    }
    console.log(`Количество  нулевых ${nol} элементов.`)
    console.log(`Количество  чётных ${chet} элементов.`)
    console.log(`Количество не чётных ${nechet} элементов.`)
}

numberOfEvenInArray([2,0,4,6,3,NaN,null, "дом",3,4,undefined])

// Почти правильно, но проверка на ноль должна стоять раньше, чем проверка на чет\нечет, т.к. остаток от деления 0 на 2 также равен нулю, поэтому нули сейчас учитываются дважды - и как четное число, и как ноль. Выше исправила на верный вариант