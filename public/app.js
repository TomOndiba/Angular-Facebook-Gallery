angular.module('MyApp', [
	'ngCookies',
	'ngResource',
	'ngMessages',
	'ui.router',
	'ui.bootstrap',
	'AppControllers',
	'AppServices'
])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html",
			controller: "LoginCtrl"
    })
	.state('gallery', {
		url: "/gallery",
		templateUrl: "views/gallery.html",
		controller: "GalleryCtrl"
	})
	.state('galleryDetail', {
		url: "/gallery/:id",
		templateUrl: "views/gallery-detail.html",
		controller: "GalleryDetailCtrl"
	})
});
