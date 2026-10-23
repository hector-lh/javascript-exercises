const palindromes = str => {
    cleanStr = str.toLowerCase().replace(/[^\w]|_/g, "");
    let j = cleanStr.length - 1;
    for (let i = 0; i < (cleanStr.length/2); i++) {
        if (cleanStr[i] != cleanStr[j]) {
            console.log(cleanStr[i], cleanStr[j])
            return false;
        }
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
