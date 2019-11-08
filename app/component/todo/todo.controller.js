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
