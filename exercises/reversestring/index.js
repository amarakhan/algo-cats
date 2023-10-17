// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    
    // sol 1 
    // let reversedString = '';
    // str.split('').forEach(char => {
    //     reversedString = char + reversedString;
    // });

    // sol 2
    // return str.split('').reduce((rev, char) => char + rev, '');

    // sol 3
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

module.exports = reverse;
