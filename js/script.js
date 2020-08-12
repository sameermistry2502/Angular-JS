var app =  angular.module("myApp",['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
$routeProvider.
when('/', {
	templateUrl: 'views/home.html',
	controller: 'mainController'
}).
when(' /contacts', {
	templateUrl: 'views/contacts.html',
	controller: 'contactsController'
}).
otherwise({
	redirectTo: '/'
});
}]);
app.controller("mainController", function($scope){
$scope.message = "WELCOME TO NG APP ";
});
app.controller("contactsController", function($scope){
$scope.message = "sameermistry1998@outlook.com ";
});