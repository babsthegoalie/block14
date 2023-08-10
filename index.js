// Input Arrays
// let inputArray = [2, 4, 6, 8, 11, 20, 15, 22];
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let inputArray = [70, 42, 55, 81, 21, 91, 34];
let inputArray = [2, 4, 6, 8, 10, 11, 12];

// Create an empty array to store odd numbers
let oddNumbers = [];

// Loop through each number in the input array
for (let i = 0; i < inputArray.length; i++) {
  const number = inputArray[i];

  // Check if the current number is odd (number % 2 !== 0)
  if (number % 2 !== 0) {
    // Add odd number to the oddNumbers array
    oddNumbers.push(number);
  }
}

// Check the length of the oddNumbers array
if (oddNumbers.length === 1) {
  // If only one odd number, print the single value
  console.log(oddNumbers[0]);
} else {
  // If multiple odd numbers, print the array of odd numbers
  console.log(oddNumbers);
}
console.log()

//VOWEL v CONSTONANT
// Create variables to keep track of consonants and vowels
let numConsonants = 0;
let numVowels = 0;

// Array of words
const words = ["hello", "ukelele", "awesome", "onomonopia", "textbook"];

// Loop through each word in the array
for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {

// Get the current word from the array
const word = words[wordIndex];
    
// Reset counts for each new word
    numConsonants = 0;
    numVowels = 0;

// Loop through each character in the word
    for (let i = 0; i < word.length; i++) {
    const letter = word[i];

// Check if the letter is a vowel
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
// Increment the vowel count
    numVowels++;
        } 
    else {
// Increment the consonant count 
    numConsonants++;
        }
    }

    // Print the results
   
    console.log(word + ' has ' + numConsonants + ' constonants and ' + numVowels + ' vowels')
}


//REVERSE ARRAY

//input arrays and create arrays to hold the reversed numbers

const firstArray = [1,2,3]
const firstArrayRev = firstArray.slice().reverse();

const secondArray = [1, 3, 5, 7, 9, 11]
const secondArrayRev = secondArray.slice().reverse();

const thirdArray = [20, 50, 30, 60, 200]
const thirdArrayRev = thirdArray.slice().reverse();

const fourthArray = [1, -1, 2, -3, 5, -8, 13]
const fourthArrayRev = fourthArray.slice().reverse();

//output results 
console.log()
console.log (firstArray + ' reversed is ' + firstArrayRev)
console.log (secondArray + ' reversed is ' + secondArrayRev)
console.log (thirdArray + ' reversed is ' + thirdArrayRev)
console.log (fourthArray + ' reversed is ' + fourthArrayRev)
console.log()


//FIZZ BUZZ

// Iterate through numbers 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Print "FizzBuzz"
    } else if (i % 3 === 0) {
        console.log("Fizz"); // Print "Fizz" for multiples of 3
    } else if (i % 5 === 0) {
        console.log("Buzz"); // Print "Buzz" for multiples of 5
    } else {
        console.log(i); // Print the number itself for other cases
    }
}