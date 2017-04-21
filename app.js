angular.module("assessment", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/')
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', {
        // controller: 'shopCtrl',
        url: '/',
        templateUrl: './views/home.html'
      })
      .state('about', {
        // controller: 'shopCtrl',
        url: '/about',
        templateUrl: './views/about.html'
      })
      .state('blog', {
        // controller: 'shopCtrl',
        url: '/blog',
        templateUrl: './views/blog.html'
      })
      .state('shop', {
        controller: 'shopCtrl',
        url: '/shop',
        templateUrl: './views/shop.html'
      })
      .state('details', {
        controller: 'productDetailCtrl',
        url: '/details/:id',
        templateUrl: './views/product-details.html'
      })
  })
