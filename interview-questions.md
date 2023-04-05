# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: The difference between a parameter and an argument is a parameter is moreso like a basic guideline of information for what you are trying to accomplish. An argument is the actual variable data. It changes

Researched answer: A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions. Argument is a value passed as input to a function.
Ex. If i wanted to know to able to find the the differnt area of a square. while creating the function I would have to give it parameters, which is the the length and height. the way you find the area of a square is length \* height. so that would be my return statement. now the areguments would be the actual data being passed in the place of length and height.

function getArea(length, height) = () =>{
return(length \* Height)
}

length and the height is the parameter letting the function know this is the information you need to get to the results requested.

Now the arguments would be the information that you want to know the area. I'm going to defin them using let statements. Lets say you want to know the area of a perfect 12 by 12 square. The 12's are going to be the arguments passed into my function.

let length = 12
let height = 12

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .Map takes the predefined parameters of the original array, also known as the callback function. It's callback function takes the inputs from the original array and outputs a new one, consisting of the return values in the same leangth array.

Researched answer: A function and currentValue Required. index and an array of the elements are all optional.

At first i really did not understand what I was reading but I will try and explain this to see if I have an understanding of what I just read on W3schools. The .map method is one of the ways you can convert a sting into an array. But arrays are indexed. But the map does not need to know what index number to place the information in because it was return it how it came in just in an array. All the callback needs to know is the current vallues that so it knows at least "I need to return this in an array within these guidlines".

3. What is the difference between map and filter?

Your answer: The difference between map and filter is that map will return a new subset array in the same legth because of its callback features. Filter will return new subset array in unordered array that will contain only the values filtered for. Filters also compare your search parameters and responds with Boolean values (true, false).

Researched answer: filter returns a subset array of pieces of information from the original array. In the callback function, return the data you wish to be part of the new array. a map will return a subset of the original array in the same length, based on custom criteria.

so if i had an array of [12, 4, 9, 10, 8, 15, 2, 3]

if you wanted to know these numbers multipled by 2 returned in the same length array, you would .map the array \*2
output would be [24, 8, 18, 20, 16, 30, 4, 6]

if you want to filter out all even numbes you would use .filter
output array would only be [9, 15,3] becuase it is only producing pieces.

1. What is iteration?

Your answer: Performing a certain loop until it stopped or it reaches a predertermined set amount of loops.

Researched answer: Iteraration is the information you are giving your loop to let it know how many time to perform this loop, because if you dont it will either continue repeating itself with no end. Or allow it to repeat until it has done so a specified amount aof times. So, you would iterate over a loop to give it that information.

1. What is the difference between a function and a method?

Your answer: Methods and functions are about the same thing. only difference I know between them thus far is methods are associated with objects as functions aren't. Method is the behaviors assigned to an object

Researched answer: function is the basic set of instrustions to perform a task on a group related statemets. Used to pass and retun data. A method, although is still a function, is used to group a different set of instructions to control the behavior of objects.

6. STRETCH: What is hoisting in JavaScript?

Your answer: This definition beats me. I am having troubles understanding the definition as i read it directly. Please explain this in lame mens terms.

Researched answer: JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: Independent reusable code

2. Spread operator: Allows for quick coppying all or some of objects and arrays into other objects and arrays

3. React state: built-in React object that houses info or data about a component

4. React props: Object where attributes of a tag is stored

5. DOM events: Signal that something is or has happened and can be triggered by the user or the browser
