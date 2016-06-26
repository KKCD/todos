//Set up a mongoose
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/todos');

//define a schema
var Todo = mongoose.model('Todo',{
	task:String;
	isCompleted:Boolean;
	isEditable:Boolean;
});

module.exports.Todo = Todo;