import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/componentes';
import './styles.css';

export const todoList =  new TodoList();

// todoList.todos.forEach(todo => createTodoHtml(todo) );
todoList.todos.forEach( createTodoHtml );

console.log( todoList.todos )




