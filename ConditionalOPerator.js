//interact with browser
//frontend ka sath change kar sakhta ha -> html

console.log('hello world');

const age = 19;
const name = 'jahn';

if(age >= 18) {
    if(name == 'john') {
    console.log("Eligible for vote")
}  else  {
    console.log('name is not matched');
}
  } else {
    console.log("Not eligible")
}

// else if condition :-> 

const a = 20;
const b  = 20;

if(a>b) {
    console.log('a is greater than b')
} else if(b>a) {
    console.log('b is grater than a')
} else 
{
    console.log('both are equal');
}

// switch condition :->

let ch = 1; // jaha 1 mil jayaga us case ko chala do

switch(ch) {
    case 1:
    console.log("I am 1");
    break;
    case 2:
    console.log("I am 2");
    break;
    case 3:
    console.log("I am 3");
    break;
    case 4:
    console.log("I am 4");
    break;
    default:
    console.log('invalid statement');
}