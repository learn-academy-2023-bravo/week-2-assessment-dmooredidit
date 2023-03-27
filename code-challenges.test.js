// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// psuedocode: creat test describing a conductor as "divisibleByThree" and using 3 expect statements set .toEqual the output array for each of the variables provided. expect 
// input: 2 arrays 
// output: string that says given number "is/is not divisible by three"

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// let numbersArray1 = [6, 7, 8, 9, 10]
// let numbersArray2 = [24, 27, 30, 33, 36]

// describe ("divisibleByThree",() => {
//     it("takes in two arrays filters through them to determine if numbers are divisible by three", 
//     () => {
//         let numbersArray1 = [6, 7, 8, 9, 10]
//         let numbersArray2 = [24, 27, 30, 33, 36]
//     expect(divisibleByThree(numbersArray1,numbersArray2)).toEqual(["15 is divisible by three"])
//     expect(divisibleByThree(numbersArray1,numbersArray2)).toEqual(["0 is divisible by three"])
//     expect(divisibleByThree(numbersArray1,numbersArray2)).toEqual(["-7 is not divisible by three"])
//     })
// })

// ---->  FAIL  ./code-challenges.test.js
//   ● Test suite failed to run
// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.209 s
// Ran all test suites.
// error Command failed with exit code 1.

// b) Create the function that makes the test pass.
// psuedocode: creat function that takes in numbersArray1 and numbersArray2 and test them to see if they are divisable by 3. Return "15 is divisible by three", "0 is divisible by three", "-7 is not divisible by three".

// const divisibleByThree = (numbersArray1,numbersArray2) => {
//     {
//     return ("15 is divisible by three") } => {
//     return ("0 is divisible by three") } =>  {
//     return ("-7 is divisible by three") }
//         let divisibleByThree = numbersArray1.filter(number 3 %=== 0),(numbersArray2.filter(number 3 %=== 0))
// }

// ----> FAIL       52 | const divisibleByThree = (numbersArray1,numbersArray2) => {
    //   53 |     {
    //     > 54 |     return ("15 is divisible by three") } => {
    //          |                                           ^
    //       55 |     return ("0 is divisible by three") } => {
    //       56 |     return ("-7 is divisible by three") }
    //       57 | }
    

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.


// a) Create a test with expect statements for each of the variables provided.
// psuedocode: create test describing a conductor as "divisibleByThree" and using 3 expect statements set .toEqual the output array for each of the variables provided. expect 
// input: 2 arrays 
// output: string that says given number "is/is not divisible by three"


describe ("divisibleByThree",() => {
        it("takes in two arrays filters through them to determine if numbers are divisible by three", 
        () => {
            let numbersArray1 = [6, 7, 8, 9, 10]
            let numbersArray2 = [24, 27, 30, 33, 36]
        expect(divisibleByThree(numbersArray1,numbersArray2)).toEqual(["15 is divisible by three"])
        expect(divisibleByThree(numbersArray1,numbersArray2)).toEqual(["0 is divisible by three"])
        expect(divisibleByThree(numbersArray1,numbersArray2)).toEqual(["-7 is not divisible by three"])
        })
    })



const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

function divisibleByThree() {
    const object1 = 15
    const object2 = 0
    const object3 = -7
}
const object1 = {
    return `${(object1} is divisible by three`
  const object2 = {
      return `${(object2} is divisible by three`
  const object3 = {
    `${(object3} is divisible by three`   
  }   
  console.log(object1)
  console.log(object2)
  console.log(object3)





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// psuedocode: creat test describing a conductor as "randomNounsCaps" and using 2 expect statements set .toEqual the output 2 arrays for each of the variables provided. might have to use .map to return the array to in the same length given.  
// input: 2 arrays 
// output: string that says given number "is/is not divisible by three"

// a) Create a test with expect statements for each of the variables provided.

describe ("randomNounsCaps",() => {
    it("takes in two arrays and capitolizes the first letter of each string in array", 
    () => {
        let randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        let randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

    expect(randomNouns1()).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion"])
    expect(randomNouns2()).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]


// Output: FAIL  ./code-challenges.test.js
//   randomNounsCaps
//   ✕ takes in two arrays and capitolizes the first letter of each string in array

// ● randomNounsCaps › takes in two arrays and capitolizes the first letter of each string in array

//   TypeError: randomNouns1 is not a function



// b) Create the function that makes the test pass.


// psuedocode: creat function that takes in randomNouns1 and randomNouns2 and .toUpperCase("[1]"). Return ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"] and ["Temperature", "Database", "Chopsticks", "Mango"] in 2 seperate arrays.

// const randomNounsCaps = (randomNouns1,randomNouns2) => 
//         {
//         return (["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]) } => {
//         return (["Temperature", "Database", "Chopsticks", "Mango"]) } => 
//          {
//             let randomNounsCaps = randomNouns1.toUpperCase("[1]"),(randomNouns2.toUpperCase("[1]"))
//     }

// console.log(randomNounsCaps(randomNouns1.toUpperCase("[1]"), (randomNouns2.toUpperCase("[1]"))


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

  // Expected output: 2
// b) Create the function that makes the test pass.
function firstVowel(...args: []) {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
}
const vowelTester1 = {
    return index["e"]}
  const vowelTester2 = {
      return index["a"]}, {
  const vowelTester3 = {
      return index["a"]}    
  }   
  console.log(vowelTester1)
  console.log(vowelTester2)
  console.log(vowelTester3)
