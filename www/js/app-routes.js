angular.module('MyTodoApp').config(function($stateProvider){

        $stateProvider.state('todos',{
            url:'/todos',
            controller:'TodoListController',
            templateUrl:'views/todos.html'
        })
        .state('createTodo',{
            url:'/todo/new',
            controller:'TodoCreationController',
            templateUrl:'views/create-todo.html'
        })
        .state('editTodo',{
            url:'/todo/edit/:id/:content',
            controller:'TodoEditController',
            templateUrl:'views/edit-todo.html'
        });

        $urlRouterProvider.otherwise('/todos');
});