angular.module('swapi', [])

.controller('swCtrl', function($scope, swService){

    swService.getAllPeople().then(function(result){
        var data = result.data;
        $scope.people = data.results;
        $scope.pageNum = getPageNum(data);
    });

    $scope.getNext = function(page){
        swService.getAllPeople(page).then(function(result){
            result.data.results.forEach(function(item){
                $scope.people.push(item);
            });
            $scope.pageNum = getPageNum(result.data);
        });
    };

    function getPageNum(data){
      return data.next.substring(data.next.indexOf('=')+1, data.next.length);
    }
})

.service('swService', function($http){

    this.getAllPeople = function(page){

        var pageUrl = page ? '/?page='+page : '';

        return $http({
            method: 'GET',
            url: 'http://swapi.co/api/people' + pageUrl
        });

    };

});
