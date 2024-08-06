//1. Create an object XMLHttpRequest
// XMLHttpRequest request=new XMlHttpRequest();
let request=new XMLHttpRequest();
// //2. Prepare  -> Method, URL, Mode(Async, Sync)
request.open("GET","../data.txt");
// //3. Handle load event
request.onload=function(){
    
}
request.addEventListener("load",function(){
    console.log(request.responseText);

})
// //4. Send/Submit
request.send();

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


