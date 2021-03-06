(function () {
    'use strict';

    angular
        .module('longPressDirective', [])
        .directive('longPress', LongPressDirective);

    LongPressDirective.$inject = ['$timeout'];

    function LongPressDirective($timeout) {
        return {
            restrict: 'A',
            scope: {
                // Reference the outer scope
                fn: "&longPress",
                event: "=event"
            },
            link: function (scope, element, attrs) {
                var timer = 0;
                scope.event = undefined;

                var dostart = function dostart(e) {
                    timer = $timeout(fn, 1000);
                    scope.event = e;
                    e.preventDefault();
                };

                var fn = function fn() {
                    cancel();
                    $timeout(function() {
                        scope.$apply(scope.fn({event: scope.event}));
                    }, 111);
                };

                var cancel = function cancel() {
                    $timeout.cancel(timer);
                };

                element.bind('touchstart mousedown', dostart);
                element.bind('touchend mouseup', cancel);
            }
        }
    }

})();

