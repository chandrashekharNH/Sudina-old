// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova']);

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  
    $ionicConfigProvider.tabs.position('bottom');
    
    $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'Templates/tabs.html'
    })
  
  
  
  .state('tabs.Home', {
      url: '/Home',
      views: {
        'Home-tab' : {
          templateUrl: 'Templates/Home.html'
        }
      }
    })
  
  .state('tabs.list', {
      url: '/list',
      views: {
        'list-tab' : {
          templateUrl: 'Templates/list.html',
          controller: 'ListController'
        }
      }
    })
  
  .state('tabs.Detail', {
      url: '/list/:memberID',
      views: {
        'list-tab' : {
          templateUrl: 'Templates/Detail.html',
          controller: 'ListController'
        }
      }
    })
  
  .state('tabs.Calendar', {
      url: '/Calendar',
      views: {
        'calendar-tab' : {
          templateUrl: 'Templates/Calendar.html',
          controller: 'CalendarController'
        }
      }
    })
    
    .state('tabs.Minimal', {
      url: '/Minimal',
      views: {
        'Minimal-tab' : {
          templateUrl: 'Templates/Minimal.html',
          controller: 'MinimalController'
        }
      }
    })
  
  $urlRouterProvider.otherwise('/tab/Home');
})

.controller('CalendarController',['$scope','$http','$state',
                              function($scope,$http,$state){
               
                                  
                $http.get('js/data.json').success(function(data)
                              {
                             
                    $scope.calendar=data.calendar;
        
                              })
                              }])

.controller('MinimalController',['$scope','$cordovaCamera','$http','$state',
                              function($scope,$http,$state){
                                  
                    //Call
                     $scope.callMe=function( ){
                         var number = '9738784767' ; 
                         window.plugins.CallNumber.callNumber(function(){
                             
                        }, function(){
                
                            }, number)                         
                    }
                    
                     //Mail
                    $scope.mailMe=function(){
                        cordova.plugins.email.isAvailable(
                            function (isAvailable) {
                                    if(isAvailable){
                                        cordova.plugins.email.open({
                                            to:     ['chandrashekhar.hodlur@gmail'],
                                        subject: ' ',
                                          body:  ' ',
                                   attachments: [''],
          });     
        }else{
          alert('Service is not available.');
        }
      }
    );
                        
                    }
                
                            } 
                                ])
    
                        
                
                
                
                

  
.controller('ListController',['$scope','$http','$state',
                              function($scope,$http,$state){
                $http.get('./Data/data.json').success(function(data)
                              {
                              $scope.Stuff=data.Stuff;
                    
                  //Passing memberID
                  $scope.whichMember=$state.params.memberID;
                              
                    $scope.data={showDelete:false,showReorder:false};
                    
                    
                    //Call
                     $scope.callMe=function(item){
                         var number = item.PhoneNumber ; 
                         window.plugins.CallNumber.callNumber(function(){
                             
                        }, function(){
                
                            }, number)                         
                    }
                    
                     //Mail
                    $scope.mailMe=function(item){
                        
                        cordova.plugins.email.isAvailable(
                            function (isAvailable) {
                                    if(isAvailable){
                                        cordova.plugins.email.open({
                                            to:     item.eMail,
                                            cc:     item.eMail,
                                           bcc:     item.eMail,
                                       subject: 'Testing'+item.FirsteName,
                                          body:    'Hello world'+ item.bio,
                                   attachments: [ 'file://img/logo.png', 
                                                  'file://css/index.css' ],
          });     
        }else{
          alert('Service is not available.');
        }
      }
    );
                        
                    }
                    
                              
                    //Star toggle
                    $scope.togglestar=function(item){
                        item.star=!item.star;                        
                    }
                    
                     $scope.doRefresh=function(){
                     $http.get('./Data/data.json').success(function(data)
                              {
                              $scope.Stuff=data;
                         $scope.$broadcast('scroll.refreshComplete');
                
                       });
                    }
                                                       
                    
                    //Delete
                    $scope.onItemDelete=function(item){
                    $scope.Stuff.splice($scope.Stuff.indexOf(item),1);                        
                    };
                    
                    //Sort
                    $scope.moveItem=function(item,fromIndex,toIndex){
                    $scope.
                    sts.splice(fromIndex,1);
                     $scope.Stuff.splice(toIndex,0,item);
                        
                    };
                              });
                              }]); 



