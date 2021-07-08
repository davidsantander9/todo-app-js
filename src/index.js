import { Todo, TodoList } from './classes';
import { saludar } from './js/componentes.js';
import './styles.css';

const todoList =  new TodoList();

const task = new Todo('Learn js');

todoList.newTodo( task );

console.log(todoList);

