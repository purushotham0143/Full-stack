// AJAX = Asynchronous JavaScript And XML.
// XML stands for eXtensible Markup Language

// XML plays an important role in many different IT systems

// XML is often used for distributing data over the Internet

// It is important for all web developers to have a good understanding of XML




//1. Create an object XMLHttpRequest
// XMLHttpRequest request=new XMlHttpRequest();
// let request=new XMLHttpRequest();
// //2. Prepare  -> Method, URL, Mode(Async, Sync)
// request.open("GET","./data.txt");
// //3. Handle load event
// request.onload=function(){
    
// }
// request.addEventListener("load",function(){
//     console.log(request.responseText);

// })
// //4. Send/Submit
// request.send();


// TO get the fake requst in get and post //https://reqres.in/
// let request=new XMLHttpRequest();
// request.open("GET","https://reqres.in/api/users?page=2");
// request.addEventListener("load",function(){

//     let result=JSON.parse(request.responseText);
//     console.log(result.data);
// })
// request.send();

// let request =new XMLHttpRequest();
// request.open("POST","https://reqres.in/api/users");
// request.onreadystatechange=function(){

//     //console.log(request.readyState);
//     if(request.readyState==4)
//         console.log(request.responseText);


// }
// request.addEventListener("load",function(){
//     console.log(request.responseText)
// })
// request.setRequestHeader("content-type","application/json");


// //request.send("variable=value&")
// let obj={};
// obj.name="CodeQuotient";
// obj.job="Trainer";
// request.send(JSON.stringify(obj));




// //pending 
// //Reject 
// // Fullfill
// let no=2;
// let myprom=new Promise((resolve,reject)=>{
// if(no%2==0)
//     resolve();
// else
// reject();
// })
// // let result=myprom;
// // console.log(result);
// myprom.then(()=>{   // when resolve the promise
// console.log("Even");
// }).catch(()=>{   // when reject the promise
//     console.log("Odd");
// })




// //fetch will return a proimise
// let p=fetch("https://reqres.in/api/users?page=2")
// // console.log(p);
// p.then((response)=>{
//     // console.log(response);
//     return response.json();
// }).then((response)=>{
//     console.log(response);
// })
// // console.log(p)



// let obj={
//     name:"First",
//     "job":"Trainer"
// }
// fetch("https://reqres.in/api/users",{
//     method:"POST",
//     body:JSON.stringify(obj),
//     headers:{
//         "content-type":"application/json"
//     }
// })
// .then((response)=>{return response.json()})
// .then((response)=>{
//     console.log(response);
// })

// let test=async ()=>{
//     let data=await fetch("https://reqres.in/api/users?page=1");
//      let result=await data.json();
//     console.log(result);
 
//  }
//  test();
 