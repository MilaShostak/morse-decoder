const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';

  for (let i = 0; i < expr.length; i += 10) {
    const block = expr.substring(i, i + 10);

    if (block === '**********') {
      result += ' ';
    } else {
      let morseCode = '';
      for (let j = 0; j < block.length; j += 2) {
        const pair = block.substring(j, j + 2);
        if (pair === '10') {
          morseCode += '.';
        } else if (pair === '11') {
          morseCode += '-';
        }
      }

      if (MORSE_TABLE[morseCode]) {
        result += MORSE_TABLE[morseCode];
      }
    }
  }

  return result;
}

module.exports = decode;
