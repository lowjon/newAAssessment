angular.module('assessment')
.service('shopSvc', function($http){
  this.getProducts = () => {

        return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
      })
        .then((res) => {
          return res
        }, ((err) => {return err}))
    }

    this.getProduct = (id) => {
      return $http({
        method: 'GET',
        url: `http://practiceapi.devmounta.in/products/${id}`
      })
    }



})
