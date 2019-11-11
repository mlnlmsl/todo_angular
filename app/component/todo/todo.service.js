angular.module("todoApp").service("todoService", function($http) {
  this.getTodos = function() {
    return $http.get("http://localhost:3000/todos");
  };
  /**
   * @param {number} id id of task to be removed
   *
   * remove particular task from list
   */
  this.removeTodo = function(id) {};

  /**
   *  @param {object} formData data of new task
   *
   * Add new task to list
   */
  this.addTodo = function(formData) {};
});
