function emp(){
    name1 = "Mugesh S",
    age = "21",
    position = "Software Engineer"
}

//Instance method
emp.prototype.display = function(name1, age, position) {
    this.name1 = name1;
    this.age = age;
    this.position = position;
    console.log(`Name: ${this.name1}, Age: ${this.age}, Positions: ${this.position}`);
}

//Static method
emp.display = function() {
    console.log(`Name: ${name1}, Age: ${age}, Position: ${position}`);
}

let emp1 = new emp();
emp1.display("Mugesh S", 21, "Software Engineer");

emp.display();
