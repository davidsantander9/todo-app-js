import { todoList } from '..';
import { Todo } from '../classes/todo.class';
import '../css/componentes.css';

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const createTodoHtml = ( todo ) => {
    const htmlTodo = `
    <li class="${ ( todo.completed ) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ ( todo.completed ) ? 'checked' : '' }>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> `;

    const div  = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

// Events

txtInput.addEventListener('keyup', (e)=>{

    if(e.keyCode === 13 && txtInput.value.length > 0 ){
        const todo = new Todo(txtInput.value);
        todoList.newTodo(todo);
        createTodoHtml(todo);
        txtInput.value = '';
    }
}); 

divTodoList.addEventListener('click', (e) => {
    const elementName = e.target.localName;
    const todoeElement = e.target.parentElement.parentElement;
    const todoId = todoeElement.getAttribute('data-id');

    if( elementName.includes('input')) {
        todoList.markAsComplete( todoId);
        todoeElement.classList.toggle('completed');
    }

});