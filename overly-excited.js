// console.log("yup")


// Creates an array that contains the words in the sentence. Now the variable 'sentence' essentially becomes the array vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, punctuation) {
    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = []
// vvv grabs theWordArray argument in the addExcitement function, iterates over vvvvvvvvvvvvvvvvv
    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
if ((buildMeUp.length + 1) % 3 === 0){
    buildMeUp.push(`${theWordArray[i]} ${punctuation}`);
    console.log(buildMeUp);
}
else buildMeUp.push(`${theWordArray[i]}`);
// Print buildMeUp to the console
}
}

// Invoke the function and pass in the array
addExcitement(sentence, '?');
