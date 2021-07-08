import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/componentes';
import './styles.css';

export const todoList =  new TodoList();

const task = new Todo('Learn js'); 

todoList.newTodo( task );
console.log(todoList);

createTodoHtml( task );

