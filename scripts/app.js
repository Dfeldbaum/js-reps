console.log('hello');

//round 1

/*

Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string. To get you started, you'll need to loop through each string in the array and get the length of each one. Those lengths should be stored in a different array that you will return.
Remember that when building a function, you want to use declare a function with a name that accepts arguments. So for building our function called lengths that accepts an array of strings, it might look something like:
// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"
    function lengths(arrayOfStrings) {

        // we can log out our "arrayOfStrings"
        console.log(arrayOfStrings);

        // now, we want to "return" something... but what?

        return whateverVariableYouWantToReturnHere;

    }

*/


var words = ['whoa', 'this', 'answer', 'is', 'correct', 'time', 'for', 'a', 'beer'];

var arrayStringLength = [];


function lengths(arrayOfStrings) {
    for (var i = 0; i<arrayOfStrings.length; i++) {
        arrayStringLength.push(arrayOfStrings[i].length);
    }
    return arrayStringLength;
};

lengths(words);

console.log(arrayStringLength);

// round 2

/*

Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
    For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
Use your function to find the following answers.
    Reference: MDN: Math.pow() for Exponential numbers

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

*/


function transmogrifier(number1, number2, number3) {
    return Math.pow(number1*number2, number3)
}

console.log(transmogrifier(5, 4, 3));

console.log(transmogrifier(13, 12, 5));

console.log(transmogrifier(42, 13, 7));



// round 3

/* Write a function called toonify that takes two parameters, accent and sentence.+

If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
    If the accent is "elmer", replace all "r" with "w".
    Feel free to add your own accents as well!
    If the accent is not recognized, just return the sentence as-is.
    Reference: MDN: String.replace()

toonify("daffy", "so you smell like sausage")
#=> "tho you thmell like thauthage"

*/

function toonify(accent, sentence) {
    if(accent === 'daffy') {
        return sentence.replace(/s/g, 'th');
    } else if(accent === 'elmer') {
        return sentence.replace(/r/g, 'w');
    } else if(accent === 'porky') {
        return sentence.replace(/th/g, 'th-th-th-th');
    } else {
        return sentence;
    }
}


console.log(toonify('daffy', 'You\'re despicable!'));

console.log(toonify('elmer', 'Be very very quiet. I\'m hunting rabbits!'));

console.log(toonify('porky', 'thats all folks!'));

// round 4

/*

 Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation. You'll need to use String.split() to create an array of words (splitting them with a space or " ". Then you'll need to reverse the order of that array using array.reverse(). Finally, you'll loop through them to create a new string).

*/


var array = ['my', 'head', 'hurts', 'lets', 'cure', 'it', 'with', 'beer'];
array.reverse();
console.log(array);

function wordReverse () {

}

// Comment: I will continue this effort during the week. I have not given up yet! Mwahahaha!