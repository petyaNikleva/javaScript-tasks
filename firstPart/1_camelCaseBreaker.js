const isUpperCase = (chatacter) => chatacter === chatacter.toUpperCase();

const breakUpCamelCase = (value) => {
    if (typeof value !== 'string') {
        return;
    }
    let result = '';
    for (const character of value) {
        if (isUpperCase(character)) {
            result += ' ';
        };
        result += character;

    }
    return result;
}

////////////////////////////////////////////

console.log(breakUpCamelCase("camelCasing"));
console.log(breakUpCamelCase("identifier"));
console.log(breakUpCamelCase("helloMyDearFriend"));
console.log(breakUpCamelCase("HelloMyDearFriend"));
console.log(breakUpCamelCase(12));




