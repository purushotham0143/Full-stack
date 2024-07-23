//DOm in FSd 
// what is Dom :- Document object model  it is Tree liek structure  
// brower will give the Dom  for all Html fiels 
// To render our page that why Dom is created 
//JS is requesting the Dom to accressign the all the elemetns in Stree structure Dom
//Documetn is Objet it is containg Many or set of  functions to access the js  
// Api:-(application program interface) it is called set of fucntions 


// document.write("<p>Hello</p>");
// var element=document.getElementsByTagName('p');  in this will get a problem of accesing the Deigner 
// console.log(element);  /// this is not array and this is arrya type store data
// element.forEach(function(element){
//     console.log(element);
// })  thi is will give you foreach is not a function because this not array 


// console.log(element[0]);
// console.log(element[1].innerText);
// element[1].innerText=" Demo <b>bold</b>";           //It will send the data same {THis two mthods for only containser not for remaing closed tags}
// element[1].innerHTML=" Demo <b>bold</b>";          //It will extract the value  


//so we use get elemnet by id obj
// var element=document.getElementById('#mypara');
// element.innerHTML="THis is script class"
// var element=document.getElementsByClassName('Choice');
// console.log(element);

//p, "#","."

// var  element=document.querySelectorAll(".Choice");
// element.forEach(function(ele){
//     console.log(ele);
// })
// console.log(element);


// let element=document.getElementById('box');
// element.value="This is my input";


function test(){
    let element=document.getElementById('box');
 element.value="This is my input";
}