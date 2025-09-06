// Hello world
console.log('Hello world!')

// Переменные и константы(динамическая типизация)
const a = 1
let d = 2.0
let str1 = 'aaa'
let str2 = "bbb"
let b = true
let arr = [1, 2, 'hello']
let map = {'a': 1, 'b': 'hello'}

// Операции
console.log('Operations')
console.log(1 + 2)
console.log(1 + 'hi')
console.log(1 * 2)
console.log(1 / 2)
console.log(5 % 2)
d += 1
console.log(d)
console.log(2 ** 4)

// Сравнение
console.log('Comparing')
console.log(1 == '1')
// Строгое сравнение
console.log('Strict compairing')
console.log(1 === '1')

console.log(1 < 2)
console.log(1 < "aaa")

console.log('a' * '8')

console.log("Array and map elements")
console.log(arr[1])
console.log(map['b'])
console.log(map.b)

console.log('Boolean ops')
console.log(true || false)
console.log(true && false)

// условия
console.log("If")
if (1 > 2) {
    console.log("ERROR!!!")
} else {
    console.log("1 really less then 2")
}

// циклы
console.log("for")
for (let i = 1; i < 10; i++) {
    console.log(i)
}

console.log("while")
let points = 0
while (points < 10) {
    points++
    console.log(points)
}
