angular.module('EversnapControllers')

.controller('GalleryDetailCtrl', function ($scope, galleryService, $log) {

    Gallery.get({ _id: $routeParams.id }, function(gallery) {
      $scope.gallery = gallery;
    });

})
