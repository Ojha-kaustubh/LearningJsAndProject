

// for in loop -> array
// for of loop in array -> undefined 

let arr = [10,20,30,40]; // 10,20,30,40

for(let ar in arr) {
    console.log(arr[ar]);
}

// for of loop -> 
let newArr = [10,20,30,40];

for(let ar of newArr) {
    console.log(newArr[ar]); // undefined
}

// multi-dmensional array :->
// Object

let makeArr = [  // this are the array
    ['john',30,22], //0
    ['thomas',34,66], //1
    ['robort',22,77] //2
]
for (let loopArr in makeArr) {
    console.log(makeArr[loopArr]);
}

for (const ar of makeArr) { // undefined
    console.log(makeArr[ar]);
}

console.log(makeArr[1][0]);
console.log(makeArr[2][0]);
console.log(makeArr[2][1]);

for(let i = 0;i<makeArr.length ; i++ ) { //traverse karaga 
    console.log(makeArr[i]);
}

for(let i = 0;i<makeArr.length ; i++ ) { // indexes print honga
    console.log(i);
}

for(let i=0;i<makeArr.length ; i++ ) {
    for(let j = 0;j<makeArr ; j++ ) {
        console.log(arr[i][j])
    }
}

makeArr.forEach( e => {
    console.log(e);
})

makeArr.forEach( e => {
    e.forEach(val => {
        console.log(val);
    })
})

// copy and spread :->

// let arr1 = ['john' , 202 , true]
// let arr2 = arr1.slice(0).concat(['item']);

// arr1.push('berg');

// console.log(arr2)
// console.log(arr1)


let arr1 = ['john',true,1];
let arr2 = [...arr1]; // spread method

arr2.push('kana') // last add
// arr2.pop('kana'); // last remove
arr2.unshift(1); //first add
// arr2.shift(1); //first remove

console.log(arr2)

// array destructing :->

let array1 = ['thomas','chad'];
let item1 = array1[0];
let item2 =  console.log()


// splice method :=>

let Newarray = [1,2,'splice','kana','learning'];
// Newarray.splice(1,1) //

//syntax => splice(startingIndex , endingIndex , add)

// Newarray.splice(1,2) // first index sa 2nd index tak delete kar do

// Newarray.splice(1,0,"HTMl"); // frist index par html add kar do

// Newarray.splice(1,2,'JS') // first index sa 22nd index tak delete kar do or 1st index par add kardo

// console.log(Newarray);

// slice method :-> 
  let a = Newarray.slice(1,2); // output :-> 2
  console.log(a)
// for each method :=>

    //same array ka sath work karta ha
    let num1 = [10,20,30,40,50,60]
    let num2 = [11,21,31,41,51,61]
    
    // num1.forEach((val , index , array) => {
    //     console.log(val + " " +index + " " + array)
    // })

    console.log(num1.concat(num2))
    console.log(num1.indexOf(10));
    console.log(num1.indexOf(40));
    // console.log(num1)

    // reverse Array

    console.log(num2.reverse())

    // sort method array :->
    console.log(num2.sort());

    // toString method :->

    console.log(num1.toString()); 

    // filter method :->
    let name = [12,23,33,45,67,11,10];

    let a1 = name.filter((val,index,arr) => {
        if(val>=10 && val<=25) {
            return val;
        }
    })

    console.log(a1.sort());

    let a2 = name.findLastIndex((val) => {
        return val == 10
    })

    console.log(a2);

    // split method :-> 

    let num3 = '10,20,30'

    let arr3 = num3.split(',');

    arr.forEach( (element) => {
        console.log(element)
    });
    console.log(arr3)

    //join method :->


    let join = arr.join(',');
    console.log(join)

// sets :-> 
