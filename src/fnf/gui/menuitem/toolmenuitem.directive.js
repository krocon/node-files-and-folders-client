(function () {
    'use strict';

    angular
        .module('toolmenuitemDirective', [])
        .directive('toolmenuitem', MenuitemDirective);

    MenuitemDirective.$inject = ['shortcutService'];

    function MenuitemDirective(shortcutService) {

        var controller = ['$scope', function ($scope) {
            var vm = $scope;

            var printShortcut = shortcutService.printShortcut;
            var kbdHtml = shortcutService.kbdHtml;

            vm.$watch('tool', function (newValue, oldValue) {
                if (newValue) {
                    var tool = newValue;
                    $scope.shortcut = kbdHtml(printShortcut(tool.shortcut));
                    $scope.label = tool.label;
                    $scope.id = tool.id;
                    $scope.tool = tool;
                }
            });

            vm.clickOn = function clickOn() {
                $scope.onItemClicked({tool: $scope.tool});
            };
        }];

        return {
            restrict: 'E',
            scope: {
                tool: '=',
                onItemClicked: '&'
            },
            link: function (scope, element, attrs) {
            },
            controller: controller,
            templateUrl: '/fnf/gui/menuitem/menuitem.html'
        }
    }

})();