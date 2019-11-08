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
function todoController() {
  var list = this;
  list.todo = "todoTest";
  list.todos = [
    { task: "react", status: true },
    { task: "react", status: true },
    { task: "react", status: true },
    { task: "react", status: true }
  ];
  list.toggle = function(index) {
    console.log(index);
  };
}
