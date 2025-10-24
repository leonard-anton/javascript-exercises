const palindromes = function (s) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

    const cleanedString = s.toLowerCase().split('').filter((char) => alphanumerical.includes(char)).join('');

    const reversed = cleanedString.split('').reverse().join('');

    return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
