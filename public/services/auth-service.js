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

        service.getUserAlbums = function () {
            //create a deferred object using Angular's $q service
            var deferred = $q.defer();
            var promise = result.get('/me/albums')
                            .done(function (albumResponse)
                             {
                                for(var i=0; i<albumResponse.data.length; i++)
                                {
                                    result.get('/' + albumResponse.data[i].id + '/photos')
                                    .done(function (response) {
                                        service.albums.push(response.data);
                                        deferred.resolve();
                                    })
                                    .fail(function (err) {
                                        $log.error(err);
                                    });
                                }
                            })
                            .fail(function (err) {
                                $log.error(err);
                                //handle error with err
                            });
            //return the promise of the deferred object
            return deferred.promise;
        }

        return service;
    
});