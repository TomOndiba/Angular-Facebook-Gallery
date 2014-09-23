angular.module('EversnapControllers')

.controller('GalleryCtrl', function ($scope, AuthService, $log) {

    $scope.showAlbums = function() {
        AuthService.getUserAlbums()
          .then(function(data) {
            $log.info('Data returned from facebook');
            $log.log(data);
        });
    }
})
