(function () {
    'use strict';

    angular
        .module('menuitemDirective', [])
        .directive('menuitem', MenuitemDirective);

    MenuitemDirective.$inject = ['shortcutService'];

    function MenuitemDirective(shortcutService) {

        var controller = ['$scope', function ($scope) {
            var vm = $scope;

            var printShortcutByActionId = shortcutService.printShortcutByActionId;
            var kbdHtml = shortcutService.kbdHtml;

            vm.$watch('mid', function (newValue, oldValue) {
                if (newValue) {
                    $scope.shortcut = kbdHtml(printShortcutByActionId(newValue));
                    $scope.label = shortcutService.getLabelForAction(newValue);
                    $scope.id = newValue;
                }
            });

            vm.clickOn = function clickOn() {
                $scope.onItemClicked({mid: $scope.id});
            };
        }];

        return {
            restrict: 'E',
            scope: {
                mid: '=',
                onItemClicked: '&'
            },
            link: function (scope, element, attrs) {
            },
            controller: controller,
            templateUrl: '/fnf/gui/menuitem/menuitem.html'
        }
    }

})();