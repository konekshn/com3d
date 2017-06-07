

//-------------------------
var app = angular.module("app", ['ngMaterial']);




// app.factory('EventFactory', function EventFactory($http, $scope){
 		
// 		var obj = {content:null};

//     $http.get('peoples.json').success(function(data) {
//         obj.content = data;
//         console.log(obj);
//     });    

//     return obj;
    

// });






//-------------------------
// app.factory('serviceForRequest', function($http) {
	
//   var initService = function () {
//   	$http.get("peoples.json")
//     .then(function(response) {
//         $scope.myWelcome = response.data;
//     });
//   };
//   // factory function body that constructs shinyNewServiceInstance
//   return initService;
// });

angular.module('app').service('serviceForRequest', function($http){

    // function getCompletenessLevel() {
    //     return $http.get(appConfig.API_URL + 'api/profile-completness/mine')
    //         .then(function (response) {
    //             return response.data;
    //         });
    // }
        this.getPeople = function  (){
            return $http.get("https://api.myjson.com/bins/wr6kl");
        }

        //
        // var initService = function () {
        //     return $http.get("peoples.json")
        //         .then(function(response) {
        //             console.log(response);
        //             return response.data;
        //         });
        //     };
        // return {
        //     initService: initService
        // };

    });




// angular.module('app')
// .factory('serviceForRequest', serviceForRequest);

// function serviceForRequest($http) {

//     var initService = function () {
    	
        
//          $http.get("peoples.json")
//     .then(function(response) {
//         var ljudi = response.data;
//     });

//     return {
//     	ljudi:ljudi
//     };

    

//     };


//     return {
//         serviceForRequest: serviceForRequest
       
//     }

// }





//-------------------------
app.controller('EventController', function($scope, serviceForRequest) {

        serviceForRequest.getPeople().then(function(response){
                $scope.persons = response.data;
        })


});