// import angular from 'angular';
// import {restangular} from './node_modules/restangular/dist/restangular.js';
import rootConfig from "./root.config";
import restangular from 'restangular';
// import run from "./run";
// console.log(restangular)

export default angular.module('uiApp', ['ngRoute', 'ngResource', 'restangular'])
.config(rootConfig);
