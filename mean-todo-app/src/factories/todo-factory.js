import angular from 'angular';

const todoFactory = angular.module('app.todoFactory',[])
.factory('todoFactory',()=>{
	function createTask(params,$scope){
		params.createHasInput=false;
		$scope.createTaskInput='';
	}

	function updateTask(todo){
		todo.task=todo.updatedTask;
		todo.isEditable=false;
	}
	return{
		createTask,
		updateTask//since using ES6 no need to do like createTask :createTask and used shorthand
	}
});

export default todoFactory;