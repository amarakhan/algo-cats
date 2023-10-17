// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let counts = {};
    let maxChar = '';
    let max = 0;

    str.split('').forEach(char => {
        counts[char] = counts[char] + 1 || 1;
    });

    for (const [key, value] of Object.entries(counts)) {
        if (value >= max) {
            maxChar = key;
            max = value;
        }
    }

    return maxChar;
}

module.exports = maxChar;
