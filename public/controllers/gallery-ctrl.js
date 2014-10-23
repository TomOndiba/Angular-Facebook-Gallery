/*
	Gallery Controller
*/
angular.module('AppControllers')

.controller('GalleryCtrl', function ($scope, FacebookService, $log) {

	$scope.loaded = false;
        FacebookService.getFacebookData()
          .then(function(data) {
          	/* To remove undefined entries */
          	$scope.loaded = true;
            data = _.compact(data);
            $scope.albums = data;
        });
})
