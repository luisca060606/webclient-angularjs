(function(angular) {
  'use strict';

  angular.module('uiApp').controller('loginCtrl', ['$scope', 'Session', function ($scope, Session) {
      $scope.texto = 'hola';
      $scope.iniciarSesion = (loginForm) => {
        let loginPromise = Session.login($scope.username, $scope.password);
        loginPromise.then(
          (data) => {
            console.log(data);
            localStorage.setItem("token", data.token)
          },
          (error) => {
            $scope.errorResponse = error;
            console.log(error);
          }
        );        
      }
  }]);

})(angular);
