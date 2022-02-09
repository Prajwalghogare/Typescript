//parameterless function

function func1() {
    console.log('This is first function')
}
func1();

//function with parameters

function add(p1, p2) {
    console.log(`p1 + p2 = ${p1+p2}`)
}
add(10, 5)

// function constructor

const multiplication = new Function(
    'p1',
    'p2',
    'console.log("Using constructor"); console.log(p1*p2);'
)

console.log(multiplication)
console.log("Multiplication")
multiplication(5, 5)

//rest parameters

function sub(...params) {
    console.log(params)
}
sub(10)
sub(10, 20)