// import { kiran } from "./util1.js";
// console.log(kiran);
// // Output: saraswat
// function myFunction() {
//   console.log("Hello World");
// }
// myFunction();
// // Output: Hello World
// function myFunction(one, two) {
//   console.log("Hello World");
//     console.log(one + two);
// }
// myFunction(1, 2);

// Output: Hello World
// Output: 3
// function mynews(threee,the="hello")
// {
//     console.log(threee)
//     console.log(the);
// }
// mynews(4);

// // Output: 4
// // Output: hello
// function sum(a,b,c)
// {
//     return a*b/c;
// }
// console.log(sum(3,2,3));
// // Output: 2
// if (10==10){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
// Output: true
// let a=10;
// let b=20;

// if (a>b){
//     console.log("hey you are right");
// }
// else{
//     console.log("hey you are wrong");
// }

// function reverseString(str)
// {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("kiran"));
// // Output: narik
// function reverses(names)
// {
//     return names.split(3).reverse().join("2");

// }
// console.log(reverses("kiran"));
 
function countVowels(vowel) {
    
    if (vowel.includes("a") || vowel.includes("e") || vowel.includes("i") || vowel.includes("o") || vowel.includes("u"))
        {
        return ("true");
        } 
    else
    { 
        return ("false");
    } 
}
console.log(countVowels("kiran"));
function vowles(name)
{
    let count=0;
    let vowels="aeiou";
    for(let i=0;i<name.length;i++)
    {
        if(vowels.includes(name[i]))
        {
            count++;
        }
    }
    return count;
}
console.log(vowles("kiran"));
// Output: 2
 function hek(nhi){
    
    {
        const nhii= nhi.split("").reverse().join("");
        return nhi.reverse==reverse.nhii;
    }
   
 }
    console.log(hek("naman"));
    


