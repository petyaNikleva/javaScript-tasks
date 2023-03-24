const calcPairsOfGloves = (arr) => {
    const collection = arr.reduce((acc, gloveColor) => {
        if (!acc.hasOwnProperty(gloveColor)) {
            acc[gloveColor] = 0;
        }
        acc[gloveColor] += 1;
        return acc;
    }, {});
    return Object.values(collection)
        .reduce((sum, num) => sum + Math.floor(num / 2), 0);
}






/////////////////////////////////////////////////

console.log(calcPairsOfGloves(['red', 'green', 'red', 'blue', 'blue']))
console.log(calcPairsOfGloves(['red', 'red', 'red', 'red', 'red', 'red',]))
console.log(calcPairsOfGloves(['red', 'red', 'yellow', 'red', 'red', 'red', 'red', 'red', 'green', 'red', 'blue', 'blue', 'yellow', 'yellow']))

