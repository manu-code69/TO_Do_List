let todo = [];

let inp = prompt(
`Choose an operation:
1. Add Task
2. View Tasks
3. Delete Task
4. Quit`
);

while (true) {

    if (inp === "1") {
        let task = prompt("Enter Task to put in Todo List");
        todo.push(task);
        console.log("Added Successfully");
    }

    else if (inp === "2") {

        console.log("******** TODO LIST ********");

        if (todo.length === 0) {
            console.log("No tasks available");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(i, todo[i]);
            }
        }

        console.log("***************************");
    }

    else if (inp === "3") {

        let idx = Number(prompt("Enter index to delete"));

        if (idx < 0 || idx >= todo.length) {
            alert("Please enter a valid index");
        } else {
            todo.splice(idx, 1);
            console.log("Deleted Successfully");
        }
    }

    else if (inp === "4") {
        console.log("App Quit Successfully");
        break;
    }

    else {
        console.log("Invalid Input");
    }

    inp = prompt(
`Choose an operation:
1. Add Task
2. View Tasks
3. Delete Task
4. Quit`
    );
}