(function () {
    'use strict';

    angular
        .module('rightClickDirective', [])
        .directive('rightClick', RightClickDirective);

    RightClickDirective.$inject = ['$timeout'];

    function RightClickDirective($timeout) {
        return {
            restrict: 'A',
            scope: {
                // Reference the outer scope
                fn: "&rightClick",
                event: "=event"
            },
            link: function (scope, element, attrs) {
                document.oncontextmenu = function (e) {
                    if (e.target.hasAttribute('right-click')) return false;
                    e.preventDefault();
                };
                var callFn = function callFn(ev) {
                    scope.event = ev;
                    console.info('ev', ev);
                    $timeout(function() {
                        scope.$apply(scope.fn({event: scope.event}));
                    }, 111);
                };
                element.bind('contextmenu', callFn);
            }
        }
    }

})();