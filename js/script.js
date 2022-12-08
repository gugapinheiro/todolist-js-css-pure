var todo = {
    nameItem: document.querySelector('.name-item'),
    addItem: document.querySelector('.add-item'),
    todoSection: document.querySelector('.todo'),

    init: () => {
        todo.bindValues();
    },

    bindValues: () => {
        todo.addItem.onclick = () => {
            todo.insertItem();
        }
    },

    insertItem: () => {
        if (todo.nameItem.value.trim() == '') {
            alert('Favor digitar um item!');
            todo.nameItem.focus();
            return;
        }

        todoItem = todo.createItem();
        todo.addCheckbox(todoItem);
        todo.addText(todoItem);
        todo.addDeleteButton(todoItem);
        todo.designToCanvas(todoItem);        
        todo.clearText();        
    },

    createItem: () => {
        const todoItem = document.createElement('div');
        todoItem.classList = 'item'
        return todoItem;
    },

    addCheckbox: (todoItem) => {
        const todoCheckBox = document.createElement('input');
        todoCheckBox.type = 'checkbox';
        todoCheckBox.onclick = (e) => {
            if (e.target.checked) {
                e.target.parentNode.querySelector('.text').style.textDecoration = 'line-through';
            }
            else {
                e.target.parentNode.querySelector('.text').style.textDecoration = 'none';
            }
            
        }
        todoItem.appendChild(todoCheckBox);
    },

    addText: (todoItem) => {
        const todoText = document.createElement('span');
        todoText.innerHTML = todo.nameItem.value;
        todoText.classList = 'text';

        todoItem.appendChild(todoText);
    },

    addDeleteButton: (todoItem) => {
        const todoDelete = document.createElement('span');
        todoDelete.classList = 'delete';
        todoDelete.onclick = (e) => {
            let mainElement = e.target.parentNode;
            mainElement.parentNode.removeChild(mainElement);
        }
        todoItem.appendChild(todoDelete);
    },

    designToCanvas: (todoItem) => {
        todo.todoSection.appendChild(todoItem);
    },

    clearText: () => {
        todo.nameItem.value = '';
        todo.nameItem.focus();
    }
}

todo.init();