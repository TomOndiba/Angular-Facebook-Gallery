angular.module('EversnapControllers')

.controller('GalleryDetailCtrl', function ($scope, FacebookService, $log, $stateParams, $modal) {


  // var indexOfList = _.findIndex(FacebookService.produceList, function(lists) {
  //   return lists._id === $stateParams.id;
  // });

  //   Gallery.get({ id: $routeParams.id }, function(gallery) {
  //     $scope.gallery = gallery;
  //   });

	$scope.openPopup = function (clickedImage) {
		var clickedImage = clickedImage
	    var modalInstance = $modal.open (
		    {
		      template: '<div class="modal-body"><div class="row"><div class=".col-xs-6 col-md-6"><img class="img-rounded" ng-src="' + clickedImage + '" width="100%"/></div><div class=".col-xs-6 col-md-6"></div></div></div>',
		      controller: ModalInstanceCtrl,
		      size: 'lg'
		    });
	    };

	var ModalInstanceCtrl = function ($scope, $modalInstance, FacebookService, $log) {

	  $scope.ok = function () {
	    $modalInstance.dismiss('cancel');
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	};

        FacebookService.getDetails($stateParams.id)
          .then(function(allAlbumPictures) {
            $log.info('Data returned from facebook');
            // $log.log(data.data.length);
            $log.log(allAlbumPictures);
            $scope.pictureObjects = allAlbumPictures.data;
        });


})
