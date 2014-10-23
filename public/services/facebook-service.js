/*
	FacebookService.
	Facebook Auth implemented via oauth.io popup login.
	The service is implemented primarily using Promises and oauth sdk callbacks.
*/

angular.module('EversnapServices', [])
.factory('FacebookService', function($q, $log){

    authorizationResult = false;
    var service = {};
    service.albums = [];
    
    /* Initialize OAuth.io with public key of the application */
        service.initialize = function() {
            OAuth.initialize(process.env.DB_URLkey, {cache:true});
        },
        service.isReady = function() {
            return (authorizationResult);
        },

        /*
            Connection to Facebook
        */

        service.connectFacebook = function() {
            var deferred = $q.defer();
            OAuth.popup('facebook', {cache:true}, function(error, result) { //cache means to execute the callback if the tokens are already present
                if (!error) {
                    $log.log('Facebook connect succesfully in auth');
                    authorizationResult = result;
                    deferred.resolve();
                } else {
                    $log.error(error);
                }
            });
            return deferred.promise;
        }

        service.clearCache = function() {
            OAuth.clearCache('facebook');
            authorizationResult = false;
        }

        /*
            Returns a promise which resolves to all albums of a user.
        */
        service.getFacebookData = function () {
    		return getUserAlbums().
                        then(function (allAlbums) {
                            return getAlbumPhotos(allAlbums);
                        });
        }

        /*
            Returns a promise which resolves to pictures inside a particular album 
        */
        service.getDetails = function(albumId) {
            return getAlbumPictures(albumId).
                        then(function (allAlbumPictures) {
                        	service.allAlbumPictures = allAlbumPictures;
                            return allAlbumPictures;
                        });
        }

        /*
	Returns an array of user's albums.
        */

	function getUserAlbums () {
            //create a deferred object using Angular's $q service
            var deferred = $q.defer();
            var promise = authorizationResult.get('/me/albums')
                            .done(function (albumResponse)
                             {
                                deferred.resolve(albumResponse);
                            })
                            .fail(function (err) { 
                                $log.error(err);
                                //handle error with err
                            });
            /* return the promise of the deferred object */
            return deferred.promise;
        }

        /*
            Returns an array containing images for each of the albums. 
        */

        function getAlbumPhotos (albumResponse) 
        {
                var promises = [];
                var deferred = $q.defer();
                if (albumResponse.data.length > 0)
                    {
                        for(var i=0; i<albumResponse.data.length; i++)
                        {
                            (function(index)
                                {                                       
                                    var promise = 
                                    authorizationResult.get('/' + albumResponse.data[index].id + '/photos')
                                        .then(function (response)
                                         {
                                            if(response.data.length > 0)
                                            {
                                                var new_album = {
                                                    id: albumResponse.data[index].id,
                                                    name: albumResponse.data[index].name,
                                                    galleryImagesData: response
                                                }
                                                return new_album;
                                            }
                                        })
                                        .fail(function (err) {
                                            $log.error(err);
                                        });
                                    if(promise != undefined)
                                        promises.push(promise);
                                })(i);
                        }
                    }
             return $q.all(promises);
        }

        /* 
            Returns an array of images inside a particular album 
        */

        function getAlbumPictures (albumId) {
            var deferred = $q.defer();
            var promise = authorizationResult.get('/' + albumId + '/photos')
                            .done(function (allAlbumPictures)
                             {
                                deferred.resolve(allAlbumPictures);
                            })
                            .fail(function (err) { 
                                $log.error(err);
                                //handle error with err
                            });
            /* return the promise of the deferred object */
            return deferred.promise;
        }

    return service;
});
