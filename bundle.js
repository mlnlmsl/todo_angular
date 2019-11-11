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
  todoService.getTodos().then(function(response) {
    self.loading = false;
    self.todos = response.data;
  });

  self.toggle = function(index) {
    console.log(index);
  };

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

  self.removeTodo = function(id) {
    self.todos.splice(id, 1);
  };
}
angular.module("todoApp").service("todoService", function($http) {
  this.getTodos = function() {
    return $http.get("http://localhost:3000/todos");
  };
  /**
   * @param {number} id id of task to be removed
   *
   * remove the task from list
   */
  this.removeTodo = function(id) {};

  /**
   *  @param {object} formData data of new task
   *
   * Add new task to list
   */
  this.addTodo = function(formData) {};
});
