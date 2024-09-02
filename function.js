

function name(a) { //argument
    console.log('hello' + a);
}

name('learnes'); //parameter
name();  


function add(a,b) {
    return a+b;
}
console.log(add(2,3))

// (function(){
//     console.log('Hello')
// })();

// (function(){
//     console.log(a+b)
// })(2+3);

// let a = function(a,b){
//     return a+b;
// }
// console.log(a(2,3))

let a = (a,b) => console.log(a + b);
a(2,4)

// function inside the funtion :->


function fun () {
    console.log('i am the function');

    function fun2() {
        fun()
    }
}

fun()

//lexical scope

function fun1() {
    var a = 1;

    console.log('this is the function 1');
    function fun2() {
        var a = 2;
        console.log('i am the function 2' + a)
    }

    fun2();
}

fun1()

// debugger :->

function Fun () {
    debugger;
    for (let i = 0 ; i<=5;i++) {
        console.log(i);
    }
}

Fun()