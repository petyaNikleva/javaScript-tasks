const findMissingNum = (arr) => {
    const constantDifference = (arr[arr.length - 1] - arr[0]) / arr.length;
    for (let i = 0; i < arr.length - 1; i++) {
        const difference = arr[i + 1] - arr[i];
        if (difference !== constDiff) {
            return arr[i] + constantDifference;
        }
    }
}

/////////////////////////////////////////////////

console.log(findMissingNum([1, 3, 5, 9, 11]));  // 7
console.log(findMissingNum([1, 5, 7, 9, 11])); // 3
console.log(findMissingNum([0, 5, 15])); // 10
console.log(findMissingNum([0, 5, 10, 15, 25])); //20
console.log(findMissingNum([-4, -3, -2, 0, 1])); // -1
console.log(findMissingNum([3, 6, 9, 15])); // 12


// Еxplanation for constantDifference variable
// 1    3     5     7     9      11
// x,  x+y,  x+2y, x+3y, x+4y,  x+5y
// x -> first num; y -> difference
//1+5y = 11 =>  y = (11-1)/5   y = 2;


