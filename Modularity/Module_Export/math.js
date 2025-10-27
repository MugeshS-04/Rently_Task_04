
export const add = (num1, num2) => {
    return num1 + num2
}

export const sub = (num1, num2) => {
    return num1 - num2
}

export const mul = (num1, num2) => {
    return num1 * num2
}

export const div = (num1, num2) => {
    if(num2 == 0){ console.log("Invalid number. Zero connot be denominator!"); return } 
    return num1 / num2
}

