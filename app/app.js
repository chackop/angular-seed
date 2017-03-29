'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
])
  .controller('weatherController', ['$http', '$scope', function ($http, $scope) {
    // london city id - 2643743
    // api key 76ecf50a3b54ae7a236fab542e340c50

$http.get('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=76ecf50a3b54ae7a236fab542e340c50')
.success(function(res) {
  $scope.tempdata = res.list[1];
})
  }]);
