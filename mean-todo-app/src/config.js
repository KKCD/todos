import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app',[uiRouter]);

app.config(($stateProvider,$urlRouterProvider,$locationProvider) =>{
	$urlRouterProvider.other('/');

	$stateProvider
		.state('todos',{
			url:'/',
			template:require('todos/todos.html')
		})
		.state('about',{
			url:'/about',
			template:require('about/about.html')
		})
	$locationProvider.html5Model(true);
});

export default app;
