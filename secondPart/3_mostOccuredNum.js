const findMostOccuredNum = (numbers) => {
    const collection = {};
    numbers.forEach(num => {
        if (typeof num !== 'number') {
            return;
        }
        if (!collection.hasOwnProperty(num)) {
            collection[num] = 0;
        }
        collection[num] += 1;
    });
    return Object.keys(collection).reduce((a, b) => collection[a] > collection[b] ? a : b);
}

///////////////////////////////////////////////

console.log(findMostOccuredNum([1, 1, 2, 3]))    // 1
console.log(findMostOccuredNum([1, 2, 3, 4, 2])) // 2


