# Fizz Buzz JavaScript Program

## Overview
This project contains a basic HTML file and a JavaScript function that implements the classic "Fizz Buzz" algorithm. The program takes an integer as input and prints each number from 1 to the provided integer, replacing certain values with special outputs:
- "Fizz" for numbers divisible by 3
- "Buzz" for numbers divisible by 5
- "Fizz Buzz" for numbers divisible by both 3 and 5

## Files
- `index.html`: A simple HTML file that loads the JavaScript functionality.
- `main.js`: The JavaScript file that contains the `fizzBuzz` function, which implements the Fizz Buzz logic.

## How It Works
1. The JavaScript function `fizzBuzz` is designed to loop through integers from 1 to a given number.
2. For each integer:
    - If the number is divisible by both 3 and 5, it prints "Fizz Buzz".
    - If the number is divisible only by 3, it prints "Fizz".
    - If the number is divisible only by 5, it prints "Buzz".
    - Otherwise, it prints the number itself.

### Example:
For `fizzBuzz(15)`, the output will be:

## Usage
1. Clone or download this repository.
2. Open the `index.html` file in a web browser to run the Fizz Buzz program.
3. The output can be viewed in the browser’s console (use developer tools).

## Running the Program
The `fizzBuzz` function can be tested with different input numbers by modifying the calls in `main.js`. The current test cases are:
```javascript
fizzBuzz(5);
fizzBuzz(9);
fizzBuzz(15);
