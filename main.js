var app = angular.module('app', []);

app.controller('myBooksCtrl', function ($scope) {
  $scope.showBook = function () {
    console.log('This is some book');
  };
});

app.controller('angularBookCtrl', function ($scope) {
  $scope.showBook = function () {
    console.log('This is AngularJS book');
  };
});

app.controller('emberBookCtrl', function ($scope) {
  $scope.showBook = function () {
    console.log('This is EmberBook');
  };
});
