const numbers = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

const convertRomanToArabicNum = (romanNum) => {
    const arr = romanNum.split('');
    let arabicNum = 0;
    for (let i = 0; i < arr.length; i++) {
        const first = numbers[arr[i]];
        const second = numbers[arr[i + 1]] || 0;
        first >= second
            ? arabicNum += first
            : (arabicNum += second - first, i++);
    }
    return arabicNum;
}

/////////////////////////////////////////////////

console.log(convertRomanToArabicNum('XXI'))  // 21
console.log(convertRomanToArabicNum('MCMXC')) // 1990
console.log(convertRomanToArabicNum('MDCLXVI')) // 1666 
console.log(convertRomanToArabicNum('MMMDCCXXIV')) // 3724
console.log(convertRomanToArabicNum('MCMXCVIII')) // 1998
console.log(convertRomanToArabicNum('MMXXIV')) // 2024

