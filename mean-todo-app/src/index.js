/*entry point for my app*/

/*const message='Hello From entry File';
console.log(message);*/

import angular from 'angular';
import appModule from 'config';
import 'css/master.scss'; 

angular.bootstrap(document, [appModule.name]);