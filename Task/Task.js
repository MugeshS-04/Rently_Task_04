class Student {

    constructor(name, age, grade, marks) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.marks = marks;
    }
    
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Marks: ${this.marks}\n`)
    }

    getMarks() {
        console.log(`${this.name}'s marks : ${this.marks}\n`)
    }

    setMarks(marks) {
        this.marks = marks;
        console.log(`Updated marks for ${this.name}\n`)
    }

}

let stud1= new Student("Mugesh S", 21, "A", 400);

stud1.getDetails();

stud1.setMarks(450);

stud1.getMarks();

