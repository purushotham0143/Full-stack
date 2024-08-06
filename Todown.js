let tasks=[];
let id=0;
let task=document.querySelector('#tasks').value;
let taskList=document.querySelector('#taskList');
let input=document.querySelector('#tasks')
input.addEventListener('keypress',function(e){
    // console.log(e)
    if(e.key=='Enter'){
        let obj={};
            obj.id=id,
            obj.status='pending',
            obj.Title=task.value;
            id++;
        tasks.push(obj);
        console.log(tasks);
        task.value = '';
        // domwork(obj);
    }
})

