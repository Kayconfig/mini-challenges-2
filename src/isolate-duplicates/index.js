function isolateDuplicates(text) {
    if( typeof(text) !== "string"){ throw new Error("Please enter a valid string")}

    let previousLetter="", duplicate_counts = 0, resultStr = "", occurence_count = 0;

    for ( let letter of text){
        
        if( letter.toLowerCase() === previousLetter){ //current letter is equivalent to previousLetter
            if( occurence_count == 2){
                resultStr += "["
                duplicate_counts++
                }
            occurence_count++
        } else {
            if( occurence_count > 2){
                resultStr += "]"
            }
            occurence_count = 1
        }  
        resultStr += letter;

        //update previous Lettter
        previousLetter = letter.toLowerCase();
    } //end forloop

    if( occurence_count > 2){
        resultStr += "]"
    }
    return [resultStr, duplicate_counts];
   }

module.exports = isolateDuplicates;
