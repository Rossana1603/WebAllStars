(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = [
        '$state',
        '$mdDialog',
        '$mdUtil',
        '$mdSidenav'
    ];

    function HeaderController($state,
                              $mdDialog,
                              $mdUtil,
                              $mdSidenav) {

        var vm = this;

        vm.toggleLeft = toogleLeft;
        vm.openMenu = openMenu;

        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function(){
                  $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                      //$log.debug("toggle " + navID + " is done");
                    });
                },300);
            return debounceFn;
        }

        function toogleLeft() {
            buildToggler('left');
        }

        function openMenu($mdOpenMenu, ev) {
            var originatorEv = ev;
            $mdOpenMenu(ev);
        }

    }

})();