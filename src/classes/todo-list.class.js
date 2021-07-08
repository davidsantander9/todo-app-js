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
        console.log('Mark as complete')
    }

    deleteCompletedTasks(){
        console.log("delete completed tasks")
    }



}