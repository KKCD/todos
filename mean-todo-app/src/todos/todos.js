import _ from 'lodash';
export default function($scope,todoFactory){
	let params={
		createHasInput:false
	};//objects passed by reference and variable is passed by copy. so I made to object and use in factories.
	//console.log(todoFactory.createTask);
	$scope.todos =[
	{
		task:'Wash Dishes',
		isCompleted:false,
		isEditable:false
	},
	{
		task:'Do Coding',
		isCompleted:true,
		isEditable:false
	}];

	$scope.onCompletedClick=todo=> {
		todo.isCompleted = !todo.isCompleted;
	};

	$scope.createTask=todoFactory.createTask.bind(this,params,$scope);

	$scope.onEditClick=todo=>{
			todo.isEditable=true;
			todo.updatedTask=todo.task;

	};

	$scope.onCancleClick=todo=>{
		todo.isEditable=false;
	};

	$scope.updateTask=todoFactory.updateTask.bind(this);

	$scope.removeTask=todoToRemove=>{
		_.remove($scope.todos ,todo => todo.task === todoToRemove.task);

	};


	$scope.$watch('createTaskInput',val=>{
		if(!val && params.createHasInput){
			$scope.todos.pop();
			params.createHasInput=false;
		}
		if(val && !params.createHasInput){
			$scope.todos.push({task:val,isCompleted:false});
			params.createHasInput=true;
		}else if(val && params.createHasInput){
			$scope.todos[$scope.todos.length -1].task = val;
		}
	});
}