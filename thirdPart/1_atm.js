const availableBanknotes = [1, 5, 10, 20, 50, 100, 500];

const banknotesWithHighestNominal = (wantedSum) => {
    if (typeof wantedSum !== 'number') return;
    let result = [];
    for (let i = availableBanknotes.length - 1; i >= 0; i--) {
        const banknoteWithNominal = availableBanknotes[i];
        while (banknoteWithNominal <= wantedSum) {
            result.push(banknoteWithNominal)
            wantedSum -= banknoteWithNominal;
        }
    }
    return result;
}

console.log(banknotesWithHighestNominal(1000)) // [500, 500]
console.log(banknotesWithHighestNominal(1025)) // [500, 500, 20, 5]
console.log(banknotesWithHighestNominal(10)) // [10]
console.log(banknotesWithHighestNominal(120)) // [100, 20]
console.log(banknotesWithHighestNominal('asd')) // undefined


