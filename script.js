// alert("connected");

//declare variables
let usernum = 0;


//prompt user to enter a number
usernum = prompt("Enter a number");
console.log("num is " + usernum);

//how do I print the numbers from 1 to usernum
for (let count = 1; count <= usernum; count++){
    //check if count is a multiple of three using the mod operator with %
    if (count % 3 === 0 && count % 5 === 0) {
        console.log("Fizz");
    }
    else if (count % 5 === 0) {
        console.log("Fuzz");
    }
    else if (count % 3 === 0) {
        console.log("Fizz Buzz");
    }
    else {
        console.log(count);
    }
}