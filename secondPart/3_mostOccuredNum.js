const findMostOccuredNum = (numbers) => {
    const collection = numbers.reduce((acc, num) => {
        if (!acc.hasOwnProperty(num)) {
            acc[num] = 0;
        }
        acc[num] += 1;
        return acc;
    }, {});
    return Object.keys(collection).reduce((mostOccured, current) => collection[mostOccured] > collection[current] ? mostOccured : current);
}

///////////////////////////////////////////////

console.log(findMostOccuredNum([1, 1, 2, 3]))    // 1
console.log(findMostOccuredNum([1, 2, 3, 4, 2])) // 2


