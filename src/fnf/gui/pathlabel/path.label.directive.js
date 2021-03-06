(function () {
    'use strict';

    angular
        .module('pathLabelDirective', [])
        .directive('pathlabel', PathLabelDirective);

    PathLabelDirective.$inject = ['$log'];

    function PathLabelDirective($log) {

        var slash = function slash(s) {
            if (!s) return '';
            return s.replace(/\\/g, '/');
        };

        var controller = ['$scope', function ($scope) {
            $scope.$watch('path', function (newValue, oldValue) {
                if (newValue) {
                    var ps = slash(newValue).split('/');
                    $scope.pathes = ps;
                }
            });

            $scope.clickOnIndex = function clickOnIndex(idx) {
                var p = $scope.pathes.slice(0, idx + 1).join('/');
                $scope.onFolderChanged({folder: p});
            };
        }];


        return {
            restrict: 'E',
            scope: {
                path: '=',
                onFolderChanged: '&'
            },
            link: function (scope, element, attrs) {
            },
            controller: controller,
            templateUrl: '/fnf/gui/pathlabel/pathlabel.html'
        }
    }

})();