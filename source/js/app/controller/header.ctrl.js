(function() {
  'use strict';
  angular.module('module.controller.header', [])
    .controller('controllerHeader', controllerHeader); 

    controllerHeader.$inject=[
    	'$scope',
      '$state',
      '$mdDialog',
      '$mdUtil',
      '$mdSidenav'
    ];

    function controllerHeader($scope, $state, $mdDialog, $mdUtil, $mdSidenav) {

      $scope.toggleLeft = buildToggler('left');

      function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
              $mdSidenav(navID)
                .toggle()
                .then(function () {
                  //$log.debug("toggle " + navID + " is done");
                });
            },300);
        return debounceFn;
      }
      
      $scope.openMenu = function($mdOpenMenu, ev) {
        var originatorEv = ev;
        $mdOpenMenu(ev);
      };
     
    	
    }
    
})();