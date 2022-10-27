const createEl = document.getElementsByClassName('createEl')[0];
const headEl = document.getElementsByClassName('heading')[0];
const descEl = document.getElementsByClassName('description')[0];
const toDolist = document.getElementsByClassName('list')[0];

const newEvent = () => {
    if (!+headEl.value || !descEl.value){
        console.log(headEl.value);
        return false
    }

    const container = document.createElement('li');
    container.classList.add('container');
    
    const headingEl = document.createElement('h2');
    headingEl.classList.add('headingEl');
    headingEl.innerText = headEl.value;
    
    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('descriptionEl');
    descriptionEl.innerText = descEl.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.disabled = true;
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove()
    })

    const isDone = document.createElement('input');
    isDone.classList.add('isDone');
    isDone.type = 'checkbox';
    isDone.addEventListener('change', () => {
        if(isDone.checked == true){
            headingEl.classList.add('done');
            descriptionEl.classList.add('done');
            deleteBtn.disabled = false;
        } else if(isDone.checked == false){
            headingEl.classList.remove('done');
            descriptionEl.classList.remove('done');
            deleteBtn.disabled = true;
        }
    });

    const divider = document.createElement('div');
    divider.classList.add('divider');
    
    container.append(isDone, headingEl,deleteBtn, descriptionEl, divider);
    toDolist.append(container);

    headEl.value = null;
    descEl.value = null;
}

createEl.addEventListener('click', newEvent);



