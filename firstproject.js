
function Task(id, title, description, completed=false ) {
    this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
     
    // To-Do List array
    let todoList = [];
     
    // Function to add a new task
    function addTask(title, description) {
        const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
        const newTask = new Task(id, title, description);
        todoList.push(newTask);
        console.log(`Task added: ${title}`);
    }
     
    // Function to display all tasks
    function displayTasks() {
        if (todoList.length > 0) {
            console.log("To-Do List:");
            todoList.forEach(task => {
    console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Completed: ${task.completed}`);
            });
        } else {
            console.log("No tasks found.");
        }
    }
    addTask("Buy groceries", "Milk, Bread, Eggs");
    addTask("Clean the house", "Living room, Kitchen, Bathroom");
    displayTasks();
     

     
     
    