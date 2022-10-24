const btn = document.getElementById('add');
const heading = document.getElementsByClassName('heading')[0];
const description = document.getElementsByClassName('description')[0];
const list = document.getElementsByClassName('list')[0];


newEvent = () => {
    const container = document.createElement('li');
    container.classList.add('container');
    
    const headingLi = document.createElement('h2');
    headingLi.classList.add('headingLi');
    headingLi.innerText = heading.value;
    
    const descriptionLi = document.createElement('p');
    descriptionLi.classList.add('descriptionLi');
    descriptionLi.innerText = description.value;

    const isDone = document.createElement('input');
    isDone.classList.add('isDone');
    isDone.type = 'checkbox';
    isDone.addEventListener('change', ()=>{
        if(isDone.checked == true){
            headingLi.classList.add('done');
            descriptionLi.classList.add('done');
            deleteBtn.disabled = false;
        }else if(isDone.checked == false){
            headingLi.classList.remove('done');
            descriptionLi.classList.remove('done');
            deleteBtn.disabled = true;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.disabled = true;
    deleteBtn.addEventListener('click', () =>{
        deleteBtn.parentElement.remove()
    })
    
    const divider = document.createElement('div');
    divider.classList.add('divider');
    
    container.append(isDone, headingLi, descriptionLi, deleteBtn, divider);
    list.append(container);

    heading.value = null;
    description.value = null;
}

btn.addEventListener('click', newEvent);












// function check () {
//     const check = document.getElementsByClassName('isDone');
//     console.dir(document);
// }



// isChecked = () => {
//     if (isDone.checked == true){
//         descriptionLi.classList.add('checked');
//         headingLi.classList.add('checked');
//     }
//     else if (isDone.checked == false) {
//         descriptionLi.classList.remove('checked');
//         headingLi.classList.remove('checked');
//     }
// }
// isDone.addEventListener('click', isChecked);



// deleteEvent = () => {
//     list.remove(container);
// }

// deleteBtn.addEventListener('click', deleteEvent)


