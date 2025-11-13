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

//ternary operator
let data = stud.course ? stud.course.favourite ? stud.course.favourite.fullycompleted ? stud.course.favourite.fullycompleted : stud.course.favourite : stud.course : stud

//if condition
let data2 = () => {
    if(stud.course) if(stud.course.favourite) if(stud.course.favourite.fullycompleted) return stud.course.favourite.fullycompleted
    else return stud
}

//try catch
let data3 = () => {
    try{
        return stud.course.favourite.fullycompleted
    }
    catch(error)
    {
        console.log("Not Available")
    }
}

//optional chaining
let data4 = stud?.course?.favourite?.fullycompleted ?? "Not Available"


//printing nested object values
for(let i in stud)
{
    if(typeof stud[i] === "object")
    {
        for(let j in stud[i])
        {
            console.log(j +" : " + stud[i][j])
            if(typeof stud[i][j] === "object")
            {
                for(let k in stud[i][j])
                {
                    console.log(k +" : " + stud[i][j][k])
                }
            }
        }
    }
    console.log(i +" : " + stud[i])
}

console.log(data)
console.log(data2())
console.log(data3())
console.log(data4)

console.log(student)

student.grade = "A" // adding new value

console.log(student)

delete student.age // deleting age value

console.log(student)