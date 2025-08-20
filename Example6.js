// to take input from user from console we use require()

/* 
const readLine = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
*/

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number: ",function(answer){
//     const number = parseInt(answer);
//     if(number > 0){
//         console.log("Number is Positive");
//     }
//     else if(number < 0){
//         console.log("Number is Negative");
//     }
//     else{
//         console.log("Number is zero");
//     }
//     rl.close();
// });

// const number = parseInt(prompt("Enter a number: "));
// if (number > 0) {
//     console.log("The number is positive");
// }
// else if (number == 0) {
//   console.log("The number is zero");
// }
// else {
//      console.log("The number is negative");
// }


const n = parseInt(process.argv[2]);

let fact  = 1;
if(isNaN(n) || n <0){
    console.log("Enter a valid Number");
}
else{
    for(let i = 1;i<=n;i++){
        fact *=i;
    }
    console.log(fact);
}


