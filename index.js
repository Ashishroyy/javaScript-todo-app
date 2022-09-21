const title = document.getElementById("title")
const desc = document.getElementById("desc");
const button = document.querySelector('button')
const container = document.querySelector(".container")

const task = localStorage.getItem('task')? 
JSON.parse(localStorage.getItem('task')):[];
showAlltask();

function RemoveItem() {
    task.forEach(() => {
        const div = document.querySelector('.task')
        div.remove();
    })
};

function showAlltask(){
    task.forEach((value, index) =>{

    const div = document.createElement('div')
    div.setAttribute('class', 'task')
    
    const innerdiv = document.createElement('div')
    div.append(innerdiv)

    const p = document.createElement('p')
    p.innerText = value.title;
    innerdiv.append(p)

    const span = document.createElement('span')
    span.innerText = value.desc;
    innerdiv.append(span)

    const btn = document.createElement('button')
    btn.setAttribute('class', 'deletebtn')
    btn.innerText = '-';
    btn.addEventListener('click', () => {
        RemoveItem();
        task.splice(index, 1)
    localStorage.setItem('task', JSON.stringify(task))
        showAlltask(); 
    });
    div.append(btn)
    container.append(div)

    
    });
}

button.addEventListener('click', (e) =>{
    e.preventDefault()
    RemoveItem();
    task.push({
        title: title.value,
        desc: desc.value
    })
    localStorage.setItem('task', JSON.stringify(task))
    showAlltask();
    
});






