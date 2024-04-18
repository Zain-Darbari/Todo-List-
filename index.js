import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.cyan("\n \tWellcome to Zain-Darbari - Todo-List Application\n "));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "Choise",
                type: "list",
                message: "Select an option your want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.Choise === "Add Task") {
            await addTask();
        }
        else if (option.Choise === "Delete Task") {
            await deleteTask();
        }
        else if (option.Choise === "Update Task") {
            await updateTask();
        }
        else if (option.Choise === "View Todo-List") {
            await viewTask();
        }
        else if (option.Choise === "Exit") {
            condition = false;
        }
    }
};
// Function to add new task from todo-list Task
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-list`);
};
// Function to view all todo-list Task
let viewTask = async () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1} ${task}`);
    });
};
// Function to delete a task from list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index  of the task you want to delete :",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully from ypur todo-list\n`);
};
// Function to update a task
let updateTask = async () => {
    await viewTask();
    let update_Task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no'of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_Task_index.index - 1] = update_Task_index.new_task;
    console.log(`\n Task at index no. ${update_Task_index.index - 1}updated successfully [for updated list Check option: "view Todo-list"]`);
};
main();
