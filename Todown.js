let tasks=[];
let task=document.querySelector('#tasks').value;
var taskList=document.getElementById('tasklist');
   tasks = JSON.parse(localStorage.getItem('key')) || [];
  let  id = tasks.length > 0 ? Math.max(tasks.map(task => task.id)) + 1 : 0;
 // this line is used to correct the id's
let input = document.querySelector('input');
input.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        let obj = {};
        obj.id = id;
        obj.status = 'pending';
        obj.Title = input.value;
        id++;
        tasks.push(obj);
        dowork(obj);
        localStorage.setItem('key', JSON.stringify(tasks));
        input.value = " ";
    }
});

function dowork(obj) {
    let taskdiv = document.createElement('div');
    taskdiv.setAttribute('id', obj.id);
    let span = document.createElement('span');
    span.innerHTML = obj.Title;
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    if (obj.status == "Completed") {
        check.checked = true;
    }
    if (check.checked == true) {
        span.style.textDecoration = "line-through";
    } else {
        span.style.textDecoration = "none";
    }
    check.addEventListener('click', () => {
        let status = "Pending";
        if (check.checked == true) {
            status = "Completed";
            span.style.textDecoration = "line-through";
        } else {
            status = "Pending";
            span.style.textDecoration = "none";
        }
        tasks = tasks.map((item) => {
            if (item.id == obj.id)
                item.status = status;
            return item;
        });
        localStorage.setItem('key', JSON.stringify(tasks));
    });

    let edit = document.createElement('button');
    edit.innerHTML = "Edit";
    edit.addEventListener('click', () => {
        let editInput = document.createElement('input');
        editInput.value = span.innerHTML;
        let saveButton = document.createElement('button');
        saveButton.innerHTML = "Save";

        saveButton.addEventListener('click', () => {
            let newValue = editInput.value;
            span.innerHTML = newValue;

            tasks = tasks.map((item) => {
                if (item.id == obj.id)
                    item.Title = newValue;
                return item;
            });
            localStorage.setItem('key', JSON.stringify(tasks));

            taskdiv.replaceChild(span, editInput);
            taskdiv.replaceChild(edit, saveButton);
        });

        taskdiv.replaceChild(editInput, span);
        taskdiv.replaceChild(saveButton, edit);

    });

    let del = document.createElement('input');
    del.setAttribute('type', 'button');
    del.value = "Delete";
    del.addEventListener('click', (e) => {
        let parent = e.target.parentNode;
        let id = parent.getAttribute("id");
        parent.remove();
        tasks.forEach((item, index) => {
            if (item.id == id) {
                tasks.splice(index, 1);
                localStorage.setItem('key', JSON.stringify(tasks));
            }
        });
    });

    taskdiv.append(span);
    taskdiv.append(check);
    taskdiv.append(del);
    taskdiv.append(edit);
    taskList.appendChild(taskdiv);
}

window.onload = () => {
    let data = JSON.parse(localStorage.getItem('key'));
    if (data) {
        data.forEach(task => {
            dowork(task);
        });
    }
};
