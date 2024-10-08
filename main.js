//  Given a number as an integer, print every integer from 1 to that number. However, 
//  when integer is divisible by 3, print "Fizz"; when it's divisible by 5, print "Buzz";
//  when divisible by both 2 and 5, print out "Fizz Buzz".

// PREP
// num -> 1 to that num -> div 3 fizz; div 3/5 fizz buzz
// Always int; pos; no float; no funny business; int always
// print to console

function fizzBuzz(num){
    // loop 1 to num - for i will be my increment
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizz Buzz")
        }else if(i % 3 === 0){
            console.log("fizz") 
        }else if(i % 5 === 0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(5)
fizzBuzz(9)
fizzBuzz(15)