let obj = {
    fName : 'John',
};

var obj2 = {
    lName : 'boss'
};

obj2._proto_ = obj;

console.log(obj2.fName)