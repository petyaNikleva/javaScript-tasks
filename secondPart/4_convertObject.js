const removeNullandUndefinedValues = (obj) => {
    const convertedObj = Object.assign({}, obj)
    Object.keys(convertedObj).forEach(key => {
        if (convertedObj[key] === null || convertedObj[key] === undefined) {
            delete convertedObj[key];
        }
    });
    return convertedObj;
}

/////////////////////

console.log(removeNullandUndefinedValues({ a: 1, b: "Hello", c: null, z: undefined })) // expected { a: 1, b: "Hello" }
console.log(removeNullandUndefinedValues({ name: "alex", age: 10, friends: [], address: null })) //expected ({ name: "alex", age: 10, friends: []}