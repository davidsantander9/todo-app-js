import { Todo } from "./todo.class";

export class TodoList{
    constructor() {
        this.loadFromLocalStorage();
        // this.todos = [];
    }

    newTodo( todo ){
        this.todos.push(todo);
        this.saveInLocalStorage();
    }

    deleteTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id);
        this.saveInLocalStorage();    
    }

    markAsComplete( id ){
        for (const todo of this.todos) {
            if( todo.id == id){
                todo.completed = ! todo.completed;
            }
        }
        this.saveInLocalStorage();
    }

    deleteCompletedTasks(){
        this.todos = this.todos.filter( todo => !todo.completed );
        this.saveInLocalStorage();
    }

    loadFromLocalStorage(){
       
        this.todos  = ( localStorage.getItem('todo') ) 
                    ?  JSON.parse(localStorage.getItem('todo'))
                    : []
        
        // this.todos = this.todos.map( obj => Todo.fromJson(obj) )
        this.todos = this.todos.map( Todo.fromJson )
    }

    saveInLocalStorage(){
       localStorage.setItem('todo', JSON.stringify(this.todos) ); 
    }



}