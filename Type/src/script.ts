// console.log("Hello");
// // let a:number = 10; // we cannot reassign the type in the typescipt 

// let a:number;
// a = 10

// a = "asds";

// let data:string; // we will get all string methods here

// let arr = [12,4,5,"a"]; // now no error because here we did not define type

// let arr:number[] = [12,4,5];

// let sum:number=0;
// arr.forEach(item=> {
//     sum += item;
// })

// console.log(sum);



//*enum operator

// enum Colors{RED=9,GREEN,BLUE}; // intially 0 1 2 if we give RED=9 then 9,10,11

// let mycolor:Colors;

// mycolor = Colors.GREEN;
// console.log(mycolor);
// console.log("DEMO");


//* we cannot convert string to number in type casting

// let result:any;
// result = "Message";
// // let output = <string>result; // it will type cast the any type of result into string type and stored in output

// let output = (result as string);
// console.log(output.charAt(4));



// let sum = (x:number,y:number=0) => {  // here we can use dafault argument also
//     console.log("sum called",x,y);
// }

// sum(2);  

// let arr = [12,3,"a"]; // it is not of any type it is string or number

// let output:number|string;
// output = 1;
// output = "sat";
// output = true  // we cannot pass boolean as it is of type number or string




let sum = (x:number,y?:number) => {  // here we can use dafault argument also
    if(y==undefined){
        y=0;
        console.log("Not passed argument");
    }
    console.log("sum called",x+y);
}

// sum(2,0);
sum(2);