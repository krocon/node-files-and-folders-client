(function () {
    'use strict';

    angular
        .module('filterInputDirective', [])
        .directive('filterInput', FilterInputDirective);

    FilterInputDirective.$inject = ['$timeout'];

    function FilterInputDirective($timeout) {
        return {
            restrict: 'E',
            scope: {
                quickFilterText: '='
            },
            link: function (scope, element, attrs) {

                var autoClosePromises = null;
                var startAutoCloseTimer = function startAutoCloseTimer() {
                    if (autoClosePromises) $timeout.cancel(autoClosePromises);
                    autoClosePromises = $timeout(function () {
                        if (!scope.quickFilterText || scope.quickFilterText === '') {
                            scope.filterInputVisible = false;
                        }
                    }, 6666);
                };

                scope.filterInputVisible = false;

                scope.filterInputChanged = function filterInputChanged() {
                    if (autoClosePromises) $timeout.cancel(autoClosePromises);
                    if (scope.quickFilterText === '') startAutoCloseTimer();
                };

                scope.onClicked = function onClicked() {
                    scope.filterInputVisible = !scope.filterInputVisible;
                    if (scope.filterInputVisible) {
                        startAutoCloseTimer();
                    } else {
                        scope.quickFilterText = '';
                    }
                };

                scope.onDblClicked = function onDblClicked() {
                    scope.quickFilterText = '';
                    startAutoCloseTimer();
                };

            },
            templateUrl: '/fnf/gui/filterinput/filterinput.html'
        }
    }

})();