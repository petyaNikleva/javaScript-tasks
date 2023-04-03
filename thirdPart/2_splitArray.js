const splitArrayBySize = (arr, size) => {
    if (!Array.isArray(arr) || typeof size !== "number" || size === 0) return;
    const newArr = [...arr];
    const result = [];
    while (newArr.length > 0) {
        if (newArr.length >= size) {
            const elementToAdd = newArr.splice(0, size);
            result.push(elementToAdd);
        } else {
            result.push(newArr);
            break;
        }
    }
    return result;
}

console.log(splitArrayBySize(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]
console.log(splitArrayBySize(['a', 'b', 'c', 'd'], 3)); // [['a', 'b', 'c'], ['d']]
console.log(splitArrayBySize(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'], 2)); // [[ 'a', 'b' ], [ 'c', 'd' ], [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(splitArrayBySize(['1', '2', '3', '4', '5', '6', '7', '8'], 5)); //[[ '1', '2', '3', '4', '5' ], [ '6', '7', '8'] ]

