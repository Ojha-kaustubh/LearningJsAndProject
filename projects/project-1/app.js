let input = document.getElementById('input');
// console.log(input)

function onfun() {
   input.style.backgroundColor = 'red'
}

function offun () {
    input.style.backgroundColor = 'yellow'
}


function fun () {
    alert(`your Email is ${input.value}`)
}