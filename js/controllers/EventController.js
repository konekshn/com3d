app.controller('EventController', function($scope, serviceForRequest) {

        serviceForRequest.getPeople().then(function(response){
                $scope.persons = response.data;
        })


});