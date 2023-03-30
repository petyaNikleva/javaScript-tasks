const obj = { a: 1, b: 2 };

Object.customEntries = (obj) => {
    const objKeys = Object.keys(obj);
    const resultArr = [];
    for (let i = 0; i < objKeys.length; i++) {
        resultArr.push([objKeys[i], obj[objKeys[i]]])
    }
    return resultArr;
}

console.log(Object.entries(obj)) // [['a', 1], ['b', 2]]
console.log(Object.customEntries(obj)) // [['a', 1], ['b', 2]]