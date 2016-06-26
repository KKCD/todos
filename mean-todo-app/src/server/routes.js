//var todosRoutes = require('server/todos/route');

module.exports= function routes(app){
	app.use('/todos',todosRoutes)
}