//console.log("Welcome to script");
// a=10;
// console.log(a);
// console.log(typeof(a));
// a="test";

// console.log(a);
// console.log(typeof(a));

// 'use strict' :- this is used to make a varible because there  is no need to gieve in javascript like let or var
//let :-let is not a Global
//var is Global
// console.log(username);

// let  username="Code";
// console.log(username);

//var username="Test";
// userName="Test";
// console.log(username);
//int sum(int,int)
// test();

// function test()
// {
//     console.log("Test called")
// }

// var test=function()
// {
//     console.log("Function called");
// }
// //console.log(test());

// test();
/*
function test(x,y=0)
{
    console.log("Test called",x,y);
    //console.log(arguments[0]);
return x+y;
}
let result=test(23,2);
console.log(result);
*/
//callback function :-which passses as a reference as a callback  function
// function test()
// {
//     console.log("My Task");
// }
// function test1()
// {
//     console.log("My Task 1");
// }

// function executeTask(task)
// {
//     console.log("Task being executed");
//     task();
        
// }

// executeTask(function(){
//     console.log("Another function")
// });

 //executeTask(test1());

 //ARRAY 
// let arr=[];
// arr[20]=10;
// arr[50]=1;

// 1. Data d;  this is wrong in java //Compile JavaX
// 2. Data *p=new Data(); To make dynamic object 
// Data d; reference/kind of pointer =null
//d=new Data(); here we are  creating new Dynamic object


// Data d=new Data()
//let d=new Data();
// let arr=new Array(5);
// let arr=[23,3,4,6];
// console.log(arr);



//Here map will return all the elements in javascript


// let result=arr.map(function(item){
//     if(item%2==0)
//     return item*2;
// else

// return item;
//     return (item%2==0?item*2:item);
    


// })

// console.log(result);
// foreaach is itterator which will not return anything
//filter :- this is used to make change on the items based on applied condition it will return 
// let result=[];
// arr.forEach(function(item){
// if(item%2==0)
//         result.push(item*2)
//     else
//     result.push(item);
// });
// console.log(result);



//let result=[];
// arr.forEach(function(item){
//     if(item%2==0)
//         result.push(item)
// });
// let result=arr.filter(function(item){
//     if(item%2==0)
//         return true;
    

// })
//console.log(result);
// for(i=0;i<arr.length;i++)
//     console.log(arr[i]);

// arr.forEach(function(item){
//     console.log(item);
    
// })



// let arr1=[100,200,300];
// function print(item,index,array)
// {

//     console.log("Called",item);

// }
// function print1()
// {
//     console.log("Another");

// }
// printArray(arr1,print);
//printArray(arr1,print1);

//console.log(arr);
// arr.push(100);
// console.log(arr);
// let item=arr.pop();
// console.log(arr);
// console.log('item removed is ',item);
//printArray(arr1);


// arr.unshift(100);
// console.log(arr);

// arr.splice(2,2,100,101,102,103);
// console.log(arr);


// function printArray(array,task){

// for(i=0;i<array.length;i++)
//    // console.log(array[i]);
//     task(array[i],i,array);


// }


//objects :- It has some assocative  propority or instance of a class

//* objects

// it has some properties and it is also known as  instance of class

// let object = {}; // empty object

// let obj = {
//    name:'code',
//    age : 30,  
//    name : 'test', // it will overwrite the name key with the test value
//    education : ['10','12th'],
//    marks : {'10th':490,'12th':500,'post graduate':900}
//   }; // without " " we can define keys also

//   obj.city = "Ambala";  // dynamically create

// console.log(obj);
// console.log(obj.education.length);

// console.log(obj.marks["10th"]); //if first letter in  key is number then we cannot acess using the dot operator 
// console.log(obj.marks["post graduate"]); // if there are special characters also we cant access

// delete obj.city  // it will delete the properties of the object 
// console.log(obj);




// let obj = new Object(); // to create a new object

// obj.name = "Rohan";
// console.log(obj);




// let obj = {
//   name : "code",
//   age: 30,
//   // getName : function(){
//   //   // console.log(this.name);
//   //   console.log(obj.name);
//   // }
//   getName : hanjji
// }



// let obj1 = {
//   name : "Quotient",
//   age: 40,
//   // getName : function(){
//   //   // console.log(this.name);
//   //   console.log(obj.name);
//   // }
//   getName : hanjji
// }

// function hanjji(){
//   // console.log(obj.name); // now also it will print the first object name  ie; code
//   console.log(this.name); // now it will display the current object properties ie; quotient
// }


// obj1.getName();
// let obj = {
//     name : "code",
//     age: 30,
  
//   }
  
  // console.log(obj);
  
  // let x = obj; // it is a reference to a object if we change in object then it will change in x and obj also 
  
  // x.age = 3123
  
  // console.log(x);
  // console.log(obj);
  
  
//   for(x in obj){
//     console.log(x); // it will print keys
//     console.log(obj[x]); // it will prints the respective key values 
//   }


let mypara=document.querySelector("#mypara");
mypara.addEventListener("click",test);
// console.log(mypara);
// console.log(mypara.classList);
// mypara.setAttribute("class","x")  // this is used to change the attributr
// mypara.classList.add("x");
// mypara.classList.remove("y");
// mypara.classList.remove("y");
// mypara.classList.toggle("x"); // If this is present in the it will remove  if not present it will add


//GuI:- Graphical User interface 
//Even Driven prograing 
// In this main important event 's  



function test(){
  console.log("test called");
}



