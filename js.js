
function AddTask(){
    var input = document.getElementById('taskinput').value
    var ele = document.getElementById('task-container')
    console.log(ele)
    var newele = document.createElement('div')
    newele.setAttribute('id','individual-task')
    newele.innerHTML = `<center><p>${input}</p><button onclick="DelTask(event)">Delete</button></center>`
    ele.append(newele)
}
function DelTask(event){
    event.target.parentElement.remove()
}

