angular.module('EversnapServices', [])
  .factory('AuthService', function($q, $log, $rootScope) {

    $rootScope.authorizationResult = false;
    var service = {};
    service.albums = [];
    
        service.initialize = function() {
            //initialize OAuth.io with public key of the application
            OAuth.initialize('8Bjzs-N_4AxpH-gR2CmfbKpHQ34', {cache:true});
        },
        service.isReady = function() {
            return ($rootScope.authorizationResult);
        },

        /*
            Connection to Facebook
        */

        service.connectFacebook = function() {
            var deferred = $q.defer();
            OAuth.popup('facebook', {cache:true}, function(error, result) { //cache means to execute the callback if the tokens are already present
                if (!error) {
                    $log.log('Facebook connect succesfully in auth');
                    $rootScope.authorizationResult = result;
                    deferred.resolve();
                } else {
                    $log.error(error);
                }
            });
            return deferred.promise;
        }

        service.clearCache = function() {
            OAuth.clearCache('twitter');
            $rootScope.authorizationResult = false;
        }

        return service;
    
});