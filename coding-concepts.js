// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
console.log(cohort.split(""))

// a) Your answer: "B","r", "a", "v", "o", " ", "2", "0", "2", "3"
// b) Verify and explain: ['B', 'r', 'a', 'v','o', ' ', '2', '0','2', '3']
// .split will split everything in a string including the spaces (becasue there is no space in between the "" ) and return them as individual strings inside a new subarray. 

  
  

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Undefined, because the function call "LEARN Student" has not been assigned to anything so is not defined.

// b) Verify and explain: Undefined "LEARN Student" is not defined as a function call

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The function call is for each value in the array "multipliedByTwo" to be multiplied by 2 and returned in a new subarray of the same length 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The function call "onlyOdds" is requesting the array to be filtered and any number that cannot have that 2 divided into it an amount of times and does not have a number remaining not equal to 0 to be filtered and pulled and returned. Notice there is no .map so the new array can be a different length than the original. NOTE: I have to see if you can .map a filter. I assume there will be an error, but it doesn't hut to see.   

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: When the function is logged it is being asked specifically to call out index 0 from the constructor "languages". Since arrays are 0 indexed by default and the index was not redefined here we would assume the array is still 0 indexed. "JavaScript" is the value of index 0.   

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: Name was redefined to be George. although the namem was changed outside of the codeblock, the const variable can be seen read and accessed anywhere is the code and will remain as George from that point forward unless a new name variable is introduced and called.  