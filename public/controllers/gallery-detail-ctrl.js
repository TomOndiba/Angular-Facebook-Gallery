/*
	Gallery Detail Controller
*/

angular.module('AppControllers')

.controller('GalleryDetailCtrl', function ($scope, FacebookService, $log, $stateParams, $modal) {

	$scope.openPopup = function (clickedImage) {
		var image = clickedImage.images[0].source;
		if(clickedImage.likes != undefined)
			var likeCount = clickedImage.likes.data.length;
		else
			var likeCount = 0;
		if(clickedImage.comments != undefined)
		{
			var commentCount = clickedImage.comments.data.length;
			var commentArray =  clickedImage.comments.data;
		}
		else {
			var commentArray = [];
			commentArray[0] = {};
			commentArray[0].message = 'No Comments';
			var commentCount = 0;	
		}
		var profileLink = clickedImage.link;

	    var modalInstance = $modal.open (
		    {
		      template: ' \
		      <div class="modal-body"><div class="row">\
		      	<div class="img-popup-width">\
		      		<img class="img-rounded" ng-src="' + image + '" width="100%"/>\
		      	</div>\
		      		<div class="content-popup-width"><div class="popup-text">\
		      		<a href="' + profileLink + '" target="_blank"> Likes: ' + likeCount + '</a>\
		      		</div>\
		      		<div class="popup-text">\
		      		<a href="' + profileLink + '"> \
		      			 Comments: ' + commentCount + '</a>\
		      		</div> \
		      			<div style="height: 100%; border: 1px solid rgba(231, 231, 231, 0.41)"> \
		      			<div class="comments-text"> \
		      				<a href="' + profileLink + '" target="_blank">' + commentArray[0].message + '</a><br>\
		      				<a href="' + profileLink + '" target="_blank"> ..See more comments</a>\
					      </div>\
					      </div>\
				      </div>\
			      </div>\
		      </div>',
		      controller: ModalInstanceCtrl,
		      size: 'lg'
		    });
	    };

	var ModalInstanceCtrl = function ($scope, $modalInstance, FacebookService, $log) {

	};

	/* Fetches pictures from the selected album */
        FacebookService.getDetails($stateParams.id)
          .then(function(allAlbumPictures) {
            $scope.pictureObjects = allAlbumPictures.data;
        });

})
