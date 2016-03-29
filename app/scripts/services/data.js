'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
  this.getTodos = function(callback) {
    $http.get('/api/todos').then(callback);
  };
  
  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };
  
  this.saveTodos = function(todos) {
    console.log("I saved " + todos.length + " todos!");
  };
  
});
