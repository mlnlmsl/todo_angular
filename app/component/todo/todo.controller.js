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
      self.todos.push({ task: self.todo, status: false });
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
}
