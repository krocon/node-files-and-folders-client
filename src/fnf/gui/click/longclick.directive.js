(function () {
    'use strict';

    angular
        .module('longClickDirective', [])
        .directive('longClick', LongClickDirective);

    LongClickDirective.$inject = ['$timeout'];

    function LongClickDirective($timeout) {
        return {
            restrict: 'A',
            scope: {
                // Reference the outer scope
                fn: "&longClick",
                event: "=event"
            },
            link: function (scope, element, attrs) {
                var time = 0;
                scope.event = undefined;

                var dostart = function dostart(e) {
                    time = Date.now();
                    scope.event = e;
                    e.preventDefault();
                };

                var checkFn = function checkFn() {
                    if (Date.now() - time > 1000) {
                        $timeout(function() {
                            scope.$apply(scope.fn({event: scope.event}));
                        }, 111);
                    }
                };

                element.bind('touchstart mousedown', dostart);
                element.bind('touchend mouseup', checkFn);
            }
        }
    }

})();

