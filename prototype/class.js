class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`);
    }
}

let emp1 = new Employee("Mugesh S", 21, "Software Engineer");
emp1.print();

let emp2 = new Employee("ABCD", 22, "Intern");
emp2.print();