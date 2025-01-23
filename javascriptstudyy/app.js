// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(2,3));
// function greet(hello,name)
// {
//    return hello+name;
// }
// console(greet("hi","kiran"));

// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet()
//     {
//       console.log("kiranji");
//     }
    
// }
//  const user1=new User("sandeep",28);
// console.log(user1);
const array=[1,2,3,4,5];
{
  console.log(array);
}
const array1=[1,2,3,4,5];
{
 
 console.log(array1);
}
const array2=[...array,...array1];
{
  console.log(array2);
}
const names={
  name:"kiran",
  sirname:"saraswat"
}
const hobbies=[{first:"reading"},{second:"writing"}];
const user={...names,...hobbies};
{
  console.log(user);
}