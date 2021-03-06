(function () {
    'use strict';

    angular
        .module('filecountDirective', [])
        .directive('filecount', [FilecountDirective]);

    FilecountDirective.$inject = [];

    function FilecountDirective() {
        //var controller = ['$scope', function ($scope) {
        //    var vm = $scope;
        //}];


        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            link: function (scope, element, attrs) {
                //scope.fileSizeSI = mainService.fileSizeSI;
            },
            //controller: controller,
            templateUrl: '/fnf/gui/filecount/filecount.html'
        }
    }

})();