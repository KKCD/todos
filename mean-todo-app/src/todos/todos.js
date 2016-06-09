export default function($scope){
	let params={
		createHasInput:false
	};
	$scope.todos =[
	{
		task:'Wash Dishes',
		isCompleted:false
	},
	{
		task:'Do Coding',
		isCompleted:true
	}];

	$scope.onCompletedClick =todo => {
		todo.isCompleted = !todo.isCompleted;
	};

	$scope.createTask =() =>{
		params.createHasInput=false;
		$scope.createTaskInput='';

	}


	$scope.$watch('createTaskInput',val =>{
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