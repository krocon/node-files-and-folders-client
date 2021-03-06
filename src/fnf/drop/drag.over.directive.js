(function () {
    'use strict';

    angular
        .module('dragOverDirective', [])
        .directive('dragOver', dragOverirective);

    dragOverirective.$inject = ['$log'];

    function dragOverirective($log) {

        return {
            restrict: 'A',
            scope: {
                dragOver: '&'
            },
            link: function (scope, element, attrs) {
                element.bind('dragover', function (event) {
                    // $log.info('_dragenter', e);
                    event.stopPropagation();
                    event.preventDefault();
                    scope.dragOver({e: event});
                });
            }
        }
    }

})();