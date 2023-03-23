const calcPairsOfGloves = (arr) => {
    const collection = {};
    arr.forEach(gloveColor => {
        if (!collection.hasOwnProperty(gloveColor)) {
            collection[gloveColor] = 0;
        }
        collection[gloveColor] += 1;
    });
    return Object.values(collection)
        .map(num => Math.floor(num / 2))
        .reduce((sum, num) => sum + num, 0);
}

/////////////////////////////////////////////////

console.log(calcPairsOfGloves(['red', 'green', 'red', 'blue', 'blue']))
console.log(calcPairsOfGloves(['red', 'red', 'red', 'red', 'red', 'red',]))
console.log(calcPairsOfGloves(['red', 'red', 'yellow', 'red', 'red', 'red', 'red', 'red', 'green', 'red', 'blue', 'blue', 'yellow', 'yellow']))

