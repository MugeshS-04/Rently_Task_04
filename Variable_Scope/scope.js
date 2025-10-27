//Inside function

function sample()
{
    let a = 10
    const b = 20
    var c = 30

    console.log(a) // 10
    console.log(b) // 20
    console.log(c) // 30
}

//Outside function

console.log(a) // Error: a is not defined
console.log(b) // Error: b is not defined
console.log(c) // Error: c is not defined

sample()

//Inside block

{
    let x = 100
    const y = 200
    var z = 300

    console.log(x) // 100
    console.log(y) // 200
    console.log(z) // 300
}

//Outside block

console.log(x) // Error: x is not defined
console.log(y) // Error: y is not defined
console.log(z) // 300

//Global scope

let a = 50
const b = 100
var c = 150

function display()
{
    console.log(a) // 50
    console.log(b) // 100
    console.log(c) // 150
}

display()