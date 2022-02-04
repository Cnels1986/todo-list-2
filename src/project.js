// this JS will handle the Project objects

class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getTasks(){
        return this.tasks;
    }
    // addTask(task){
    //     this.tasks.push(task);
    // }
    // deleteTask(task){
    //     deletes the task from the array if found
    // }
}

export default Project;
