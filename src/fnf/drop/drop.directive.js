(function () {
    'use strict';

    angular
        .module('dropDirective', [])
        .directive('drop', dropDirective);

    dropDirective.$inject = ['$timeout', '$log'];

    function dropDirective($timeout, $log) {

        return {
            restrict: 'A',
            scope: {
                drop: '&'
            },
            link: function (scope, element, attrs) {
                element.bind('drop', function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    $timeout(function() {
                        scope.drop({e: event});
                    });
                    return false;
                });
            }
        }
    }

})();