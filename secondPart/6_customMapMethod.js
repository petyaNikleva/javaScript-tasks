Array.prototype.myMap = function (callback) {
    const resultArr = [];
    for (let index = 0; index < this.length; index++) {
        resultArr.push(callback(this[index], index, this));
    }
    return resultArr;
}


/////////////////////////////////////////

const numbers = [1, 2, 3];
const result1 = numbers.myMap((number) => number * 2)
const result2 = numbers.myMap((number) => String(number))

console.log(result1) // [2 , 4, 6];
console.log(result2) // ['1', '2', '3'];




