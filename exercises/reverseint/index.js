// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (typeof n !== 'number') {
        return 0;
    }

    if (n >= 0) {
        const nString = n.toString().split('').reverse().join('');
        return parseInt(nString);
    } else {
        // handle sign
        n *= -1;
        const nString = n.toString().split('').reverse().join('');
        return parseInt(nString) * -1;
    }
}

module.exports = reverseInt;
