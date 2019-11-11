(function(angular) {
  angular.module("todoApp", ["ngComponentRouter"]);
})(window.angular);
angular.module("todoApp", []).component("navBar", {
  templateUrl: "./app/component/navbar/navbar.html"
});
angular.module("todoApp").component("todoList", {
  templateUrl: "./app/component/todo/todo.html",
  controller: todoController
});

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

  self.taskCompleted = function(id) {
    self.todos[id].isCompleted = !self.todos[id].isCompleted;
  };
}
angular.module("todoApp").service("todoService", function($http) {
  this.getTodos = function() {
    return $http.get("http://localhost:3000/todos");
  };
  /**
   * @param {number} id id of task to be removed
   *
   * remove particular task from list
   */
  this.removeTodo = function(id) {
    console.log(id);
    return $http.delete(`http://localhost:3000/todos/${id}`);
  };

  /**
   *  @param {object} formData data of new task
   *
   * Add new task to list
   */
  this.addTodo = function(formData) {};
});
