import rootConfig from "./root.config";
import restangular from 'restangular';

export default angular.module('uiApp', ['ngRoute', 'ngResource', 'restangular'])
.config(rootConfig);
