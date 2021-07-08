export class TodoList{
    constructor() {
        this.todos = [];
    }

    newTodo( todo ){
        this.todos.push(todo);
    }

    deleteTodo( id ){
        console.log('Delete');
    }

    markAsComplete( id ){
        for (const todo of this.todos) {
            if( todo.id == id){
                todo.completed = ! todo.completed;
            }
        }
    }

    deleteCompletedTasks(){
        console.log("delete completed tasks")
    }



}