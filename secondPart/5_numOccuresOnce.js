const findOneNumOccurOnlyOnce = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (numbers.indexOf(num) === numbers.lastIndexOf(num)) {
            return num;
        }
    }
}

//////////////////////////////////////

console.log(findOneNumOccurOnlyOnce([1, 2, 2, 3, 4, 3, 4])); // 1
console.log(findOneNumOccurOnlyOnce([1, 1, 2, 3, 3, 4, 4])); // 2
