angular.module('Eversnap', [
	'ngCookies',
	'ngResource',
	'ngMessages',
	'ui.router',
	'ui.bootstrap',
	'EversnapControllers',
	'EversnapServices'
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
	.state('anatomy', {
		url: "/anatomy",
		templateUrl: "views/anatomy.html",
		controller: "AnatomyCtrl"
	})
});
