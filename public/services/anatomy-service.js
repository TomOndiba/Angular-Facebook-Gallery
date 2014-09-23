angular.module('EversnapServices', [])
.factory('anatomyService', function(){

	var fac = {};

	fac.categories = [{name:'Surgery Type 1',content:['Subtype 1', 'Subtype 2']},
		{name:'Surgery Type 2',content:['Subtype 1', 'Subtype 2', 'Subtype 3']},
		{name:'Surgery Type 3',content:['Subtype 1', 'Subtype 2', 'Subtype 3', 'Subtype 4']}];

	return fac;

});
