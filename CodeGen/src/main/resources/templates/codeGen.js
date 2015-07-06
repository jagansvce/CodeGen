var codeGen = angular.module("codeGen", []);

codeGen.controller('IndexController', function($scope) {
   $scope.metadata = edpSchema;
   
   $scope.expandAllTbls = function(){
	   $($scope.metadata).each(function(){
		   this.$expanded='expanded';
	   });
   }
   $scope.collapseAllTbls = function(){
	   $($scope.metadata).each(function(){
		   this.$expanded='';
	   });
   }
   $scope.selectAllTbls = function(){
	   $($scope.metadata).each(function(){
		   this.$selected=true;
	   });
   }
   $scope.selectNoneTbls = function(){
	   $($scope.metadata).each(function(){
		   this.$selected=false;
	   });
   }
//   $scope.selectNoneTbls();
   $scope.selectAllTbls();
   
});