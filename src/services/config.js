(function(angular) {
  'use strict';

  const hostname = '127.0.0.1';
  const protocol = 'http:'
  const apiPortPart = ':8000'

  angular.module('uiApp')
    .constant('config', {
      apiHost: hostname + apiPortPart,
      apiOrigin: protocol + '//' + hostname + apiPortPart,
      apiBase: protocol + '//' + hostname + apiPortPart + '/api/v1/',
      featureFlags: { },
    })
    .config(['$logProvider', function($logProvider){
      $logProvider.debugEnabled(true);
    }]);

})(angular);