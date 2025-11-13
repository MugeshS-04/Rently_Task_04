//encapsulation
class employee{
    #salary
    constructor(name, age, position, salary){
        this.name = name
        this.age = age
        this.position = position
        this.#salary = salary
    }

    getsalary(){
        return this.#salary
    }

    increment(amount){
        this.#salary += amount
    }
}

let emp1 = new employee("Mugesh S", 21, "Software Engineer", 1000)
emp1.increment(500)

console.log(emp1.salary) //undefined 
console.log(emp1.getsalary()) //1500


//inheritance
class manager extends employee{
    constructor(name, age, position, salary, department){
        super(name, age, position, salary)
        this.department = department
    }

    display(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Position: ${this.position}, Department: ${this.department}, Salary: ${this.getsalary()}`)
    }
}

let mgr1 = new manager("ABCD", 30, "Manager", 2000, "IT")
mgr1.increment(1000)
mgr1.display()


