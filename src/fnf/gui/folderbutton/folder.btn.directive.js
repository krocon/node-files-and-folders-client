(function () {
    'use strict';

    angular
        .module('folderBtnDirective', [])
        .directive('folderbtn', FolderBtnDirective);

    FolderBtnDirective.$inject = [];

    function FolderBtnDirective() {
        return {
            restrict: 'E',
            scope: {
                startingPoints: '=',
                label: '=',
                onFolderChanged: '&'

            },
            link: function (scope, element, attrs) {
            },
            templateUrl: '/fnf/gui/folderbutton/folderbutton.html'
        }
    }

})();