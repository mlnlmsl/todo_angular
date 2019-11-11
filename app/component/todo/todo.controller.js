function todoController(todoService) {
  var self = this;

  self.inputEmpty = false;
  self.loading = true;
  self.todo = "";

  /**
   * Fetch all todos
   */
  todoService.getTodos().then(function(response) {
    self.loading = false;
    self.todos = response.data;
  });

  /**
   * add new todo
   */
  self.addTodo = function() {
    console.log(self.todo);
    if (self.todo) {
      self.inputEmpty = false;
      self.todos.push({ task: self.todo, isCompleted: false });
      self.todo = "";
    } else {
      self.inputEmpty = true;
    }
  };

  /**
   * remove todo of particular id
   */
  self.removeTodo = function(id) {
    self.todos.splice(id, 1);
  };

  /**
   * @param {number} id
   *
   * mark the task completed
   */
  self.taskCompleted = function(id) {
    self.todos[id].isCompleted = !self.todos[id].isCompleted;
  };
}
