/*
	Gallery Controller
*/
angular.module('AppControllers')

.controller('GalleryCtrl', function ($scope, FacebookService, $log) {

        FacebookService.getFacebookData()
          .then(function(data) {
          	/* To remove undefined entries */
            data = _.compact(data);
            $scope.albums = data;
        });
})
