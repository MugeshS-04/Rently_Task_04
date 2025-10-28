let employee = {
    name: "Mugesh S",
    age: "21",
    position: "Software Engineer"
}

let intern = Object.create(employee) // creating intern object from employee prototype

console.log(employee)

intern.name = "ABCD"

console.log(intern)
console.log(intern.hasOwnProperty("name")) // true
console.log(intern.hasOwnProperty("age"))  // false
console.log(intern.__proto__) // accessing prototype object
console.log(intern.__proto__ === employee) // true
console.log(intern.propertyIsEnumerable("position")) // true