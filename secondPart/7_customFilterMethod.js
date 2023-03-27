Array.prototype.myFilter = function (callback) {
    const filterArr = [];
    for (let index = 0; index < this.length; index++) {
        const isPassingCondition = callback(this[index], index, this)
        if (isPassingCondition) {
            filterArr.push(this[index]);
        }
    }
    return filterArr;
}

///////////////////////////////////////////////////////

const numbers = [1, 2, 3];

const result1 = numbers.myFilter((number => number > 2));
const result2 = numbers.myFilter((number => number % 2 === 0));

console.log(result1) // [3]
console.log(result2) // [2]

