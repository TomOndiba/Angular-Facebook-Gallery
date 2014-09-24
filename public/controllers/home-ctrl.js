angular.module('EversnapControllers', [])

.controller('LoginCtrl', function ($scope, FacebookService, $log, $state) {

	/*
		Facebook Login goes here.
	*/

	FacebookService.initialize();

	$scope.facebookLogin = function() {
	    FacebookService.connectFacebook()
	    	.then(function() {
		        if (FacebookService.isReady()) {
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