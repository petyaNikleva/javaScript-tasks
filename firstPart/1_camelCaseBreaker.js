const isUpperCase = (chatacter) => chatacter === chatacter.toUpperCase();

const breakUpCamelCase = (value) => {
    if (typeof value !== 'string') {
        return;
    }
    const result = [];
    const stringAsArr = value.split('');
    stringAsArr.forEach((character, index) => {
        if (isUpperCase(character) && index !== 0) {
            result.push(' ');
        }
        result.push(character);
    });
    return (result.join(''));
}

////////////////////////////////////////////

console.log(breakUpCamelCase("camelCasing"));
console.log(breakUpCamelCase("identifier"));
console.log(breakUpCamelCase("helloMyDearFriend"));
console.log(breakUpCamelCase("HelloMyDearFriend"));
console.log(breakUpCamelCase(12));




