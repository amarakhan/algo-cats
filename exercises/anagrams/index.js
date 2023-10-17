// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {


    aChars = charCount(stringA);
    bChars = charCount(stringB);

    if (Object.keys(aChars).length !== Object.keys(bChars).length) {
        return false;
    }

    for (const key in aChars) {
        if (bChars[key] !== aChars[key]) {
            return false;
        }
    }

    return true;
}

function charCount(str) {

    charMap = {};
    str.split('').forEach(char => {
        if (char.match(/[a-z]/i)) {
            charMap[char.toLowerCase()] = charMap[char.toLowerCase()] + 1 || 1;
        }
    });

    return charMap;
}

module.exports = anagrams;
