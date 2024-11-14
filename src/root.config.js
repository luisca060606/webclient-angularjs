export default ['$routeProvider', 'RestangularProvider', 'config', function($routeProvider, RestangularProvider, config) {
	"use strict";
	"ngInject";
	$routeProvider
		.when('/login', {
			templateUrl: 'src/views/login.html'
		})
		.otherwise({
			redirectTo: '/'
		})
	RestangularProvider.setBaseUrl(config.apiBase);
    RestangularProvider.setRequestSuffix('/');
}]