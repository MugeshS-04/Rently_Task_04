let employee = {
    name: "Mugesh S",
    age: "21",
    position: "Software Engineer"
}

let intern = Object.create(employee) // creating intern object from employee prototype

let obj = Object.defineProperties(employee, {
    property1 : {
        value : 40,
        writable : true,
    },
    prop2 : {
        value : 50,
        writable : 10,
    }
})

console.log(employee.property1)
console.log(obj.property1)

console.log(employee)

intern.name = "ABCD"

console.log(intern)
console.log(intern.hasOwnProperty("name")) // true
console.log(intern.hasOwnProperty("age"))  // false
console.log(intern.__proto__) // accessing prototype object
console.log(intern.__proto__ === employee) // true
console.log(intern.propertyIsEnumerable("position")) // true