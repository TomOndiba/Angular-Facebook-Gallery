angular.module('EversnapServices')
.factory('galleryService', function(){

	var service = {};

	service.categories = [
						{
							name:'Facial Surgery',
							content:[
							{
								id: '1',
								name:'Side-View Face',
								pictures:[
								'assets/img/face-muscles2.jpg',
								'assets/img/face-muscles3.png',
								'assets/img/face-muscles.jpg',
								'https://www.franklincollege.edu/science_courses/A&Pfiles/muscle_head.jpg'
								]
							},
							{
								id: '2',
								name:'Face and Trap muscles',
								pictures:[
								'assets/img/face-muscles2.jpg',
								'assets/img/face-muscles3.png',
								'assets/img/face-muscles.jpg',
								'https://www.franklincollege.edu/science_courses/A&Pfiles/muscle_head.jpg'
								]								
							},
							{
								id: '3',
								name:'Face and Neck muscles',
								pictures:[
								'assets/img/face-muscles2.jpg',
								'assets/img/face-muscles3.png',
								'assets/img/face-muscles.jpg',
								'https://www.franklincollege.edu/science_courses/A&Pfiles/muscle_head.jpg'
								]
							},
							{
								id: '4',
								name:'Facial muscles',
								pictures:[
								'assets/img/face-muscles2.jpg',
								'assets/img/face-muscles3.png',
								'assets/img/face-muscles.jpg',
								'https://www.franklincollege.edu/science_courses/A&Pfiles/muscle_head.jpg'
								]
							}
						]
						},
						{
							name:'Chest Surgery',
							content:[
							{
								id: '1',
								name:'Breast Augmentation',
								pictures:['assets/img/breast1.png',
								 'assets/img/breast2.jpg',
								 'http://www.sciencepicturecompany.com/_img/preview/Breast-Anatomy_spc-id-3436.jpg']
							},
							{
								id: '2',
								name:'Breast lift',
								pictures:['assets/img/breast1.png',
								'assets/img/breast2.jpg',
								'http://www.sciencepicturecompany.com/_img/preview/Breast-Anatomy_spc-id-3436.jpg']
							},
							{
								id: '3',
								name:'Breast reduction',
								pictures:[
								'assets/img/breast1.png',
								'assets/img/breast2.jpg',
								'http://www.sciencepicturecompany.com/_img/preview/Breast-Anatomy_spc-id-3436.jpg'
								]
							}]
						},
						{
							name:'Non-Surgical treatments',
							content:[
							{
								id: '1',
								name:'Laser Hair Removal',
								pictures:['http://www.makemeheal.com/news/images/silkn-laser-hair-removal-process.JPG',
								'http://www.lavedo.com/laser/images/Mole_eng_16.jpg',
								'http://www.hairtransplants-hdc.com/assets/mainmenu/386/editor/laser-phases.jpg?0.10121911688113821']
							},
							{
								id: '2',
								name:'Vein therapy',
								pictures:['http://www.makemeheal.com/news/images/silkn-laser-hair-removal-process.JPG',
								'http://www.lavedo.com/laser/images/Mole_eng_16.jpg',
								'http://www.hairtransplants-hdc.com/assets/mainmenu/386/editor/laser-phases.jpg?0.10121911688113821']
							},
							{
								id: '3',
								name:'Sweating treatment',
								pictures:['http://www.makemeheal.com/news/images/silkn-laser-hair-removal-process.JPG',
								'http://www.lavedo.com/laser/images/Mole_eng_16.jpg',
								'http://www.hairtransplants-hdc.com/assets/mainmenu/386/editor/laser-phases.jpg?0.10121911688113821']
							}]
						}
						];

	return service;

});
