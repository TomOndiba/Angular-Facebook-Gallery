angular.module('EversnapServices')
  .factory('AuthService', function($q, $log) {

    var authorizationResult = false;
    var service = {};
    service.albums = [];
    
        service.initialize = function() {
            //initialize OAuth.io with public key of the application
            OAuth.initialize('8Bjzs-N_4AxpH-gR2CmfbKpHQ34', {cache:true});
            //try to create an authorization result when the page loads, this means a returning user won't have to click the twitter button again
        },
        service.isReady = function() {
            return (authorizationResult);
        },
        service.connectFacebook = function() {
            $log.log('Facebook connect called');
            var deferred = $q.defer();
            OAuth.popup('facebook', {cache:true}, function(error, result) { //cache means to execute the callback if the tokens are already present
                if (!error) {
                    $log.log('Facebook connect succesfully in auth');
                    authorizationResult = result;
                    deferred.resolve();
                    // $log.log(authorizationResult);
                } else {
                    $log.error(error);
                }
            });
            return deferred.promise;
        }

        service.clearCache = function() {
            OAuth.clearCache('twitter');
            authorizationResult = false;
        }

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

        function getAlbumPhotos (albumResponse) 
        {
                var promises = [];
                var deferred = $q.defer();
                if (albumResponse.data.length > 0)
                    {
                        for(var i=0; i<albumResponse.data.length; i++)
                        {
                            // $log.log(i);
                            (function(index)
                                {                                       
                                    var promise = 
                                    authorizationResult.get('/' + albumResponse.data[index].id + '/photos')
                                        .done(function (response)
                                         {
                                            if(response.data.length > 0)
                                            {
                                                $log.log('response');
                                                $log.log(response);
                                                var new_album = {
                                                    id: albumResponse.data[index].id,
                                                    galleryImagesData: response
                                                }
                                                return new_album;
                                                // service.albums.push(new_album);
                                                // deferred.resolve(service.albums);
                                            }
                                        })
                                        .fail(function (err) {
                                            $log.error(err);
                                        });
                                        // promise.responseJSON.id = albumResponse.data[index].id;
                                        $log.log('promise')
                                        $log.log(promise);
                                    promises.push(promise);
                                })(i);
                        }
                    }
             return $q.all(promises);
        }

        service.getFacebookData = function () {
            return getUserAlbums().
                        then(function (allAlbums) {
                            $log.log(allAlbums)
                            return getAlbumPhotos(allAlbums);
                        })
        }

        return service;
    
});