export class Todo{

    static fromJson({ id, task, completed, created} ){
        const tempTodo = new Todo( task );

        tempTodo.id = id;
        tempTodo.task = task;
        tempTodo.completed = completed;

        return tempTodo;

    }

    constructor( task ) {
        this.task = task;
        this.id = new Date().getTime();
        this.completed = false;
        this.created = new Date();
    }
}