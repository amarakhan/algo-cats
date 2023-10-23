// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    str = str.toLowerCase();
    const vowels = ['a','e','o','i','u'];
    let count = 0;
    for (let v of vowels) {
        let c = str.split(v).length -1;
        c = c >= 0 ? c : 0;
        count += c; 
    }
    return count;
}

module.exports = vowels;
