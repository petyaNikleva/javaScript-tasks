const entries = ([['a', 1], ['b', 2]])

const customFromEntries = (arrOfEntires) => {
    const obj = {};
    arrOfEntires.forEach(pair => obj[pair[0]] = pair[1])
    return obj;
}

console.log(Object.fromEntries(entries)); // {a: 1, b: 2}
console.log(customFromEntries(entries)) // {a: 1, b: 2}