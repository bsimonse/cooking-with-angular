'use strict';

angular.module('cookingWithAngularApp')
  .directive('cwaIngredients', function () {
    return {
      templateUrl: '/app/addRecipe/ingredients/cwaIngredients.html',
      restrict: 'E',
      scope: {
        ingredients : "="
        },
        link: function(scope, element, attr) {
            scope.toFocus = element.find("form input")[0];
        },
        
        controller: function IngredientsCtrl($scope){
            $scope.newIngredient = {};
            
            $scope.addIngredient = function(){
                $scope.ingredients.push($scope.newIngredient);
                $scope.newIngredient = {};
                $scope.toFocus.focus();
            }
        }
    }
}
);
