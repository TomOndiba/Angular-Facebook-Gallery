/*
	Home Controller
*/
angular.module('AppControllers', [])

.controller('LoginCtrl', function ($scope, FacebookService, $log, $state) {

	/*
		Facebook Auth Initialize using oauth.io
	*/

	FacebookService.initialize();

	/*
		Login 
	*/
	$scope.facebookLogin = function() {
	    FacebookService.connectFacebook()
	    	.then(function() {
		        if (FacebookService.isReady()) {
		        /*
		        	If the authorization is successful,
		        	move onto Gallery View 
		        */
		        $state.go('gallery');
		        }
		    });
	}


})