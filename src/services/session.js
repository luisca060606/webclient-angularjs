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
          console.log('aaa')
          // resetLoginCookies();
          // $rootScope.onEdit = false;
          // $log.debug("Start logins/user post for login");
          let loginResource = Restangular.all('login/');
          let loginPromise = loginResource.post(
            {'username': username, 'password': password}
          );
          return loginPromise;
        }

        return {
          login: login,
          // logout: logout,
        };
      }]
  );

})(angular);        