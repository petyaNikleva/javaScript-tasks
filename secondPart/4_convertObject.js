const removeNullandUndefinedValues = (obj) => {
    const resultObj = {};
    Object.keys(obj).forEach(key => {
        if (obj[key] !== null && obj[key] !== undefined) {
            resultObj[obj[key]] = obj[key];
        }
    })
    return resultObj;
}

/////////////////////

console.log(removeNullandUndefinedValues({ a: 1, b: "Hello", c: null, z: undefined })) // expected { a: 1, b: "Hello" }
console.log(removeNullandUndefinedValues({ name: "alex", age: 10, friends: [], address: null })) //expected ({ name: "alex", age: 10, friends: []}