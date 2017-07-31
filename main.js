// // Runs when HTML file is loaded
// $('#user-email').on('keypress',function() {
//         var email = $('#user-email').val()
//         var message = 'Welcome Back, ' + email;
//         $('.welcome-message').text(message);
//     });
var foodieApp = angular.module('foodieApp',[]);

    foodieApp.controller('mainController',function($scope) {
    	// scope here is an object to which we can add list of properties and function
	  // $scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
	  $scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
}]
})
    foodieApp.controller('loginController',function($scope) {
})