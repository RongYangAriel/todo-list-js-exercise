// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    descirption: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has ${task.complete ? "": "not"} been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1

task1.logState();
task1.markCompleted();
task1.logState();
