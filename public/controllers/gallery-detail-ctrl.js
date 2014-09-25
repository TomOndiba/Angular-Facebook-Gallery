angular.module('EversnapControllers')

.controller('GalleryDetailCtrl', function ($scope, FacebookService, $log, $stateParams, $modal) {

	$scope.openPopup = function (clickedImage) {
		var image = clickedImage.images[0].source;
		if(clickedImage.likes != undefined)
			var likeCount = clickedImage.likes.data.length;
		else
			var likeCount = 0;
		if(clickedImage.comments != undefined)
			var commentCount = clickedImage.comments.data.length;
		else
			var commentCount = 0
		var profileLink = clickedImage.link;

	    var modalInstance = $modal.open (
		    {
		      template: '<div class="modal-body"><div class="row"><div class="img-popup-width"><img class="img-rounded" ng-src="' + image + '" width="100%"/></div><div class="content-popup-width"><div class="popup-text"><a href="' + profileLink + '" target="_blank"> Likes: ' + likeCount + '</a></div><div class="popup-text"><a href="' + profileLink + '"> Comments: ' + commentCount + '</a></div><div style="height: 100%; border: 1px solid black"><ul><li ng-repeat="comment in' +  clickedImage.comments.data + '">{{comment.message}}</li></ul></div></div></div></div>',
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

	/* Fetches pictures from the selected album */
        FacebookService.getDetails($stateParams.id)
          .then(function(allAlbumPictures) {
            $log.info('Data returned from facebook');
            // $log.log(data.data.length);
            $log.log(allAlbumPictures);
            $scope.pictureObjects = allAlbumPictures.data;
        });

})
