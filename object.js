

let obj = {

    name: "bravo",
    age : 21,
    'last name' : "john",

    // create the function

    fun: function() {
        console.log('i am the function');
    },

    arr:[20,30,40]
}

console.log(obj.name);
console.log(obj.age);

obj.key = 'item';

let a = 'key2'
obj[a] = 'item2'
console.log(obj);


for (let i in obj) {
    console.log(obj[i])
}

for (let i of Object.keys(obj)) { // key print hogi
    console.log(i)
}

// objectc using array 

let arr =[
     {user:1,name:'kana'},
     {user:2,name:'soja'},
     {user:4,name:'jara'}
]

console.log(arr)

for(let i in arr) {
    console.log(arr[i])
}

for(let i of arr) {
    console.log(i.name)
}

let [item1 , item2 , item3] = arr;
console.log(item1.name)
console.log(item2.user);
console.log(item3);



