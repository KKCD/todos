import _ from 'lodash';
export default function($scope){
	let params={
		createHasInput:false
	};
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

	$scope.createTask=()=>{
		params.createHasInput=false;
		$scope.createTaskInput='';

	};

	$scope.onEditClick=todo=>{
			todo.isEditable=true;
			todo.updatedTask=todo.task;

	};

	$scope.onCancleClick=todo=>{
		todo.isEditable=false;
	};

	$scope.updateTask=todo=>{
		todo.task=todo.updatedTask;
		todo.isEditable=false;	
	};

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