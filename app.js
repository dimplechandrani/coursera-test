(function(){
'use strict';

    angular.module('myfirstmodule',[])
            .controller('myfirstcontroller',function($scope){
                    $scope.name='dimple'
                    $scope.sayhello=function(){
                        return "Hello World"
                    }
     });

})();