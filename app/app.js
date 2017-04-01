'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
])
  .controller('weatherController', ['$http', '$scope', function ($http, $scope) {
    var URL = 'http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&cnt=5&appid=76ecf50a3b54ae7a236fab542e340c50';
    // Structured request header
    // var URL = 'http://api.openweathermap.org/data/2.5/forecast/'; 
    // var request = {
    //   method: 'GET',
    //   url: URL,
    //   params: {
    //     q: 'London', // or id 2643743
    //     mode: 'json',
    //     units: 'metric',
    //     cnt: '5',
    //     appid: '76ecf50a3b54ae7a236fab542e340c50'
    //   }
    // };

    $http.get(URL)
      .success(function (response) {
        // take basic response list
        $scope.weatherdata = response.list;
      });
  }]);
