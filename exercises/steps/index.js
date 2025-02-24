// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

    if (!n) {
        return '';
    }

    for (i = 1; i <=n; i++ ) {
        let str = '';
        str += "#".repeat(i);
        str += ' '.repeat (n-i);
        console.log(str);
    }
    return;
}

module.exports = steps;
