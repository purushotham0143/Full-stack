// let input1=document.querySelector("#input1");
// let input2=document.querySelector("#input2");
// let result=document.querySelector("#result");
// let addbtn=document.querySelector("#addbtn");

// addbtn.addEventListener("click",function(){
//     let operand1=parseInt(input1.value);
//     let operand2=parseInt(input2.value);

//     let sum=operand1+operand2;
//     result.value=sum;


// })
//ASSIGN 2
let digits=document.querySelector("#digits");
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let btn3=document.querySelector("#btn3");
btn1.addEventListener("click",clickHandler);
btn2.addEventListener("click",clickHandler);
btn3.addEventListener("click",clickHandler);
let operand1=0;
let operator="";
let isNew=false;

let elements=document.querySelectorAll(".btns");
elements.forEach(function(element){
    element.addEventListener("click",clickHandler);
})

let operations=document.querySelectorAll(".operations");
operations.forEach(function(element){
    element.addEventListener("click",operationHandler);
})
function operationHandler(e)
{
    if(e.target.innerText=="+")
    {
        operand1=parseInt(digits.innerText);
        operator="+";
        isNew=true;
    }
    if(e.target.innerText=="=")
        {
            if(operator=="+")
            {
                let operand2=parseInt(digits.innerText);
                let add=operand1+operand2;
                digits.innerHTML=add;


            }

        }

}


function clickHandler(e)
{
    if(digits.innerText=="0")
        digits.innerText="";
    if(isNew==true)
    {
        digits.innerText="";
        isNew=false;
    }



    let target=e.target;
    digits.innerText=digits.innerText+target.innerText;


}
//ASSIGN 3

// let tasks = [];
// let id = 1;
// let taskname = document.querySelector("#taskname");
// let taskList = document.querySelector("#taskList");
// taskname.addEventListener("keypress", function (e) {

//     //    console.log(e);
//     if (e.key == "Enter") {
//         // tasks.push(taskname.value);
//         let obj = {};
//         obj.title = taskname.value;
//         obj.status = 'Pending';
//         obj.id = id;
//         id++;
//         tasks.push(obj);
//         setLocalStorage();
//         addDom(obj);
//         // console.log(tasks);
//         taskname.value = '';


//     }

//     // console.log("Enter pressed");



// })
// function addDom(task) {
//     // let li=document.createElement("li");
//     // li.innerText=taskname.value;

//     // taskList.append(li);

//     let taskdiv = document.createElement("div");
//     taskdiv.setAttribute("id", task.id);

//     let span = document.createElement("span");
//     span.innerText = task.title;

//     let chk = document.createElement("input");
//     chk.setAttribute("type", "checkbox");
//     chk.addEventListener("click", function () {

//         //console.log(chk.checked);
//         let status = "Pending";
//         if (chk.checked == true) {
//             status = "Completed";
//             span.style.textDecoration = "line-through";
//         }
//         else {
//             status = "Pending";
//             span.style.textDecoration = "none";


//         }
//         tasks = tasks.map(function (item) {

//             if (item.id == task.id)
//                 item.status = status;

//             return item;

//         })
//         setLocalStorage();
//         console.log(tasks);

//     })
//     let delbtn=document.createElement("button");
//     delbtn.innerText="Del";
//     // delbtn.addEventListener("click",function(){
//     //     taskdiv.remove();
//     //     //console.log(tasks);
//     //     tasks=tasks.filter(function(item){
//     //         if(item.id!=task.id)
//     //                 return true;
//     //     })
//     //     console.log(tasks);


//     // })
//     delbtn.addEventListener("click",delHandler);



//     taskdiv.append(span);
//     taskdiv.append(chk);
//     taskdiv.append(delbtn);


//     taskList.append(taskdiv);



// }

// function delHandler(e)
// {
//     //e.target.parentNode.remove();
// let parent=e.target.parentNode;
// let id=parent.getAttribute("id");
// parent.remove();

//     //taskdiv.remove();
//         //console.log(tasks);
//         tasks=tasks.filter(function(item){
//             if(item.id!=id)
//                     return true;
//         })
//         console.log(tasks);
//         setLocalStorage();

// }

// function setLocalStorage()
// {
//     //let arr=["one","two"];
//     //document.write(arr);
//    // let obj={};
//    // obj.title="Test";
// //    let arr=[{"name":"Code"}]
// //     //document.write(JSON.stringify(obj));

// //     localStorage.setItem("items", JSON.stringify(arr));
// //     let data=JSON.parse(localStorage.getItem("items"));

// //    console.log( data[0]);

// localStorage.setItem("tasks",JSON.stringify(tasks));


// }
// //setLocalStorage();
// function getLocalStorage()
// {
//     // if(localStorage.getItem("tasks"))
//     //         tasks=JSON.parse( localStorage.getItem("tasks"));
//     //     else
//     //     tasks=[];

//     tasks=(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[])
//     tasks.forEach(element => {
//         addDom(element);

        
//     });
//   console.log(tasks);


// }
// getLocalStorage();