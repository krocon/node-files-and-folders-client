(function () {
    'use strict';

    angular
        .module('dragEnterDirective', [])
        .directive('dragEnter', DragEnterDirective);

    DragEnterDirective.$inject = ['$timeout', '$log'];

    function DragEnterDirective($timeout, $log) {

        return {
            restrict: 'A',
            scope: {
                dragEnter: '&'
            },
            link: function (scope, element, attrs) {
                element.bind('dragenter', function (e) {
                    // $log.info('_dragenter', e);
                    e.stopPropagation();
                    e.preventDefault();
                    $timeout(function(){
                        scope.dragEnter({e: e});
                    });

                });
            }
        }
    }

})();