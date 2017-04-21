angular.module('assessment')
  .controller('productDetailCtrl', function($scope, $state, shopSvc){
    console.log($state.params);
    shopSvc.getProduct($state.params.id).then(data => {
      console.log(data);
      $scope.oneProduct = data.data
    })
})
