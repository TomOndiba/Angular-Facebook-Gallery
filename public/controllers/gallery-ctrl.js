angular.module('EversnapControllers')

.controller('GalleryCtrl', function ($scope, AuthService, $log) {

        AuthService.getFacebookData()
          .then(function(data) {
            $log.info('Data returned from facebook');
            // $log.log(data.data.length);
            $log.log(data);
            $scope.albums = data;
        });
})
