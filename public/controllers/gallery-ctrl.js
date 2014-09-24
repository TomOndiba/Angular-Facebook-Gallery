angular.module('EversnapControllers')

.controller('GalleryCtrl', function ($scope, FacebookService, $log) {

        FacebookService.getFacebookData()
          .then(function(data) {
            $log.info('Data returned from facebook');
            // $log.log(data.data.length);
            data = _.compact(data);
            $log.log(data);
            $scope.albums = data;
        });
})
