const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

function morse(text) {

  if( typeof(text) !== "string") throw new Error("Please provide a morse string");

  let morseWordConverter = (morse_word) => {
    //this function returns the translated version(english_word) of morse_word
    let english_word = ""
    //concatenate the translation of morse_character to english word
    for( morse_character of morse_word.split(" ")){
        if( MORSE_CODE.hasOwnProperty(morse_character)){
          english_word += MORSE_CODE[ morse_character ]
        }else{
          english_word += morse_character;
        }
    }//end for
    return english_word;
  }//end morseWordconverter

  //remove spaces before or after
  text = text.trim()
  //get morse code words by splitting the morse text using 3 spaces.
  let morse_code_words = text.split("   ").map( morse_code_word=>{
      return morseWordConverter(morse_code_word)
  });

  return morse_code_words.join(" ")
}


module.exports = morse;
