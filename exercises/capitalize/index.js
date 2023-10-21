// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let capitalized = '';
    const chars = str.split('');

    for (i = 0; i < chars.length; i++) {
        let char = chars[i];
        if ((i===0 && chars[i].match(/[a-z]/i)) || !chars[i-1].match(/[a-z]/i)) {
            char = char.toUpperCase();
        }
        capitalized = capitalized + char;
    }
    
    // console.log( str + " - vs - " + capitalized);
    return capitalized;
}

module.exports = capitalize;
