(function(angular) {
  'use strict';

  angular.module('uiApp').service(
    'Session', [
      'Restangular', '$rootScope', '$location',
      '$log', '$timeout',
    function(
      Restangular, $rootScope, $location,
      $log, $timeout
    ) {

        function login(username, password) {
          let loginResource = Restangular.all('login/');
          let loginPromise = loginResource.post(
            {'username': username, 'password': password}
          );
          return loginPromise;
        }

        return {
          login: login,
        };
      }]
  );

})(angular);        