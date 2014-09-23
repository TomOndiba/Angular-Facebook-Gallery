angular.module('EversnapControllers', [])

.controller('LoginCtrl', function ($scope, AuthService, $log, $state) {

	/*
		Facebook Login goes here.
	*/

	AuthService.initialize();

	$scope.facebookLogin = function() {
	    AuthService.connectFacebook()
	    	.then(function() {
		        if (AuthService.isReady()) {
		        	$log.log('Auth was successfull in Login ctrl')
		        /*
		        	If the authorization is successful,
		        	move onto Gallery View 
		        */
		        $state.go('gallery');
		        }
		    });
	}


})