function calc(exec, a, b) {
    if (typeof a != "number" || typeof b != "number" || a != a || b != b) {
        return "Error";
    }
    let operations = {
        sum: a + b,
        sub: a - b,
        mult: a * b,
        div: a / b,
    }
    if (!(exec in operations)) return "unknown operation";
    else {
        return operations[exec];
    }
}


console.log(calc("sum", 1, 2));
console.log(calc("sub", 1, 2));
console.log(calc("mult", 1, 2));
console.log(calc("div", 1, 2));
console.log(calc("dev", 1, 2));
console.log(calc(1, 2));