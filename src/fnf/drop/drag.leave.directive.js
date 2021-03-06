(function () {
    'use strict';

    angular
        .module('dragLeaveDirective', [])
        .directive('dragLeave', DragLeaveDirective);

    DragLeaveDirective.$inject = ['$timeout', '$log'];

    function DragLeaveDirective($timeout, $log) {

        return {
            restrict: 'A',
            scope: {
                dragLeave: '&'
            },
            link: function (scope, element, attrs) {
                element.bind('dragleave', function (e) {
                    // $log.info('_dragLeave', e);
                    e.stopPropagation();
                    e.preventDefault();
                    $timeout(function() {
                        scope.dragLeave({e: e});
                    });
                });
            }
        }
    }

})();