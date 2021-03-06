(function () {
    'use strict';

    angular
        .module('clipboardService', [])
        .factory('clipboardService', clipboardService);

    clipboardService.$inject = ['mainService', '$log'];

    function clipboardService(mainService, $log) {
        $log.info('clipboardService...');
        var ret = {};

        var getSelectedFiles = mainService.getSelectedFiles;
        var getFirstPossibleRow = mainService.getFirstPossibleRow;

        var getNamesText = function getNamesText(){
            var files = getSelectedFiles();
            if (files.length===0) {
                var row = getFirstPossibleRow();
                if (row) files.push(row);
            }
            var buf = [];
            for (var i = 0; i < files.length; i++) {
                buf[buf.length] = files[i].base;
            }
            return buf.join('\n');
        };

        var getFullNamesText = function getFullNamesText(){
            var files = getSelectedFiles();
            if (files.length===0) {
                var row = getFirstPossibleRow();
                if (row) files.push(row);
            }
            var buf = [];
            for (var i = 0; i < files.length; i++) {
                buf[buf.length] = files[i].dir + '/' + files[i].base;
            }
            return buf.join('\n');
        };

        var copyNames = function copyNames(){
            copy(getNamesText());
        };

        var copyNamesAsJson = function copyNamesAsJson(){
            copy(JSON.stringify(getNamesText().split('\n'), null, 2));
        };

        var copyFullNames = function copyFullNames(){
            copy(getFullNamesText());
        };

        var copyFullNamesAsJson = function copyFullNamesAsJson(){
            copy(JSON.stringify(getFullNamesText().split('\n'), null, 2));
        };

        var dummCallback = function dummCallback(ok){};

        var copy = function copy(textToCopy, callback) {
            $log.info(textToCopy); // todo weg
            if (!callback) callback = dummCallback;
            if (window.clipboardData) {
                window.clipboardData.setData('text', textToCopy);
                return callback(true);
            }
            if (document.execCommand && document.queryCommandSupported('copy')) {
                var textarea = generateClipboardDestination();
                textarea.text(textToCopy);
                textarea.focus().select();
                var success = document.execCommand('copy');
                textarea.remove();
                if (success) {
                    return callback(true);
                }
            }
            //if (copyDlg === null || copyDlg.length === 0) {
            //    $('body').append($templateCache.get(copyDlgUrl));
            //    copyDlg = $('div.clipboard-service-copy-dlg');
            //    copyDlg.find('.btn').click(function () {
            //        return callback(false);
            //    });
            //}
            //copyDlg.modal({ backdrop: 'static' });
            //copyDlg.find('textarea').val(textToCopy);
        };

        var generateClipboardDestination = function generateClipboardDestination() {
            var textarea = angular.element('<textarea id="clipboard"></textarea>').css({
                width: 0,
                height: 0,
                opacity: 0,
                position: 'absolute',
                zindex: 99123
            });
            angular.element('body').append(textarea);
            return textarea;
        };

        ret.copyFullNames = copyFullNames;
        ret.copyNames = copyNames;
        ret.copyFullNamesAsJson = copyFullNamesAsJson;
        ret.copyNamesAsJson = copyNamesAsJson;
        ret.copy = copy;
        ret.iam = 'clipboardService';
        return ret;
    }

}());