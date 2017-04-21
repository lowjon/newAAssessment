angular.module('assessment').controller('shopCtrl', function($scope, $state, shopSvc){

   console.log($state.params)

    shopSvc.getProducts().then( data => {
      console.log(data.data);
      $scope.products = data.data
    })
})
