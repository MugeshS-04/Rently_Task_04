let student = {
    name: "Mugesh S",
    age: "21",
    course: "BE - CSE"
}

let stud = {
    name : "Mugesh S",
    year : "third",
    course : {
        subs : ["OS", "DBMS", "CN", "CO"],
        favourite : {
            subs : ["OS", "DBMS"],
            fullycompleted : {
                subs : ["OS"],
            }
        },
        important : ["OS", "DBMS"]
    }
}

let data = stud.course ? stud.course.favourite ? stud.course.favourite.fullycompleted ? stud.course.favourite.fullycompleted : stud.course.favourite : stud.course : stud

let data2 = () => {
    if(stud.course) if(stud.course.favourite) if(stud.course.favourite.fullycompleted) return stud.course.favourite.fullycompleted
    else return stud
}

let data3 = () => {
    try{
        return stud.course.favourite.fullycompleted
    }
    catch(error)
    {
        console.log("Not Available")
    }
}

console.log(data)
console.log(data2())
console.log(data3())

console.log(student)

student.grade = "A" // adding new value

console.log(student)

delete student.age // deleting age value

console.log(student)