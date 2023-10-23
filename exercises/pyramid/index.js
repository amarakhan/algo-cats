// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
    // pattern: 1r 1c, 2r 3c, 3r 5c, 4r 7c 
    // let columns = (rows*2) - 1;
    let spaces = n-1;
    for (i=1; i<=n; i++) {
        let str = '';
        str += ' '.repeat(spaces);
        str += '#'.repeat((i*2)-1);
        str += ' '.repeat(spaces);
        console.log(str);
        spaces -= 1;
    }
}

module.exports = pyramid;
