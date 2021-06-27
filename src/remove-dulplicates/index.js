function removeDuplicates(obj) {

    let keepFirstOccurenceOfDuplicates = (inputArray) => {
    //remove duplicates from inputArray and maintain order, returns array with no duplicate
    let array_with_no_duplicate = inputArray.reduce( (accumulatorArray, cv) => {
            if (!accumulatorArray.includes(cv)) 
                accumulatorArray.push(cv)
            return accumulatorArray
        }, [] );
        
        return array_with_no_duplicate;

    }

    let getComparisonStringArrays = (entries) => {
        //returns the compilation of strings from arrays in each entry of entries
        let compiled_str_arr = entries.reduce((accumulatorArray, current_value) => {
            let [key, str_arr] = [...current_value];
            accumulatorArray = accumulatorArray.concat(str_arr);
            return accumulatorArray;
        }, [] );

        return compiled_str_arr;
    }


    let entries = Object.entries(obj)

    //modify entries using the map function
    let result = entries.map((entry, index, entries) => {
        let [key, str_arr] = [...entry]
        // remove duplicates from str_arr
        str_arr = keepFirstOccurenceOfDuplicates(str_arr);

        // get a compilation of str_arr of other entries starting from index + 1
        let comparisonArray = getComparisonStringArrays(entries.slice(index + 1));
        //filter str_arr i.e from elements in str_arr that is present in comparisonArray
        str_arr = str_arr.filter(str => {
            if (! comparisonArray.includes(str)) {
                return true
            }
        });

        return [key, str_arr];
    });

    /*convert the result [  ['1', ['A','D','E','G'] ],
                            ['2', ['E','H','J','R'] ],
                            ['3', ['J','A','E','I'] ],
                            ...
                            ]

    to => { '1' : ['A','D','E','G'],
            '2' : ['E','H','J','R'],
            '3' : 'J','A','E','I']
           }
    */
    let resultObj = Object.fromEntries(result) 
    return resultObj;

}



//console.log(removeDuplicates(obj))
module.exports = removeDuplicates;
