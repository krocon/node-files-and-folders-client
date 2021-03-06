(function () {
    'use strict';

    angular
        .module('findActionService', [])
        .factory('findActionService', findActionService);

    findActionService.$inject = [
        'mainService',
        'searchService',
        'tabService',
        'folderService',
        '$log'];

    function findActionService(mainService, searchService, tabService, folderService, $log) {
        $log.info('findActionService...');

        var ret = {};
        var getSourceDir = mainService.getSourceDir;
        var getSourcePanelIndex = mainService.getSourcePanelIndex;
        var getSelectedRows = mainService.getSelectedRows;
        var addTab = tabService.addTab;
        var search = searchService.search;
        var loadDirectory = folderService.loadDirectory;

        var searchCount = 0;
        var rid;
        var dialogData = {
            quickinput: ''
        };
        var selectedDirs = [];

        var find = function find() {
            var pattern = dialogData.quickinput;
            try {
                '123'.match(pattern);
            } catch (e) {
                $log.warn('Could not parse pattern! ' + pattern);
                return
            }

            addTab(getSourcePanelIndex(), function (panelIndex, tab) {
                searchCount++;
                tab.fileList = [];
                tab.path = 'search_' + searchCount;
                tab.label = 'Search ' + searchCount;
                loadDirectory(panelIndex, {fileList: tab.fileList}); // clear table.

                var source = dialogData.source;
                var pathes = [];

                if (source === 'all') {
                    pathes = selectedDirs;
                } else {
                    pathes.push(source);
                }
                var filter = {
                    pathes: pathes,
                    pattern: pattern
                };
                var lastUpdate = Date.now();
                rid = search(filter, function (obj, end) {
                    if (obj && obj.base) {
                        tab.fileList.push(obj);
                        tab.running = true;
                        //if (tab.fileList % 100 === 0) {
                        if (Date.now() - lastUpdate > 2000) {
                            lastUpdate = Date.now();
                            loadDirectory(panelIndex, {fileList: tab.fileList});
                        }
                    }

                    if (end) {
                        tab.running = false;
                        loadDirectory(panelIndex, {fileList: tab.fileList});
                    }
                });
            });
        };

        var getDialogData = function getDialogData() {
            selectedDirs = [];
            dialogData.source = null;
            dialogData.sources = [
                {value: getSourceDir(), label: getSourceDir()}
            ];

            var rows = getSelectedRows();
            var dirs = [];
            for (var i = 0; i < rows.length; i++) {
                if (rows[i].isDir) {
                    var dir = rows[i].dir + '/' + rows[i].base;
                    dirs.push({value: dir, label: dir});
                    selectedDirs.push(dir);
                    if (i === 0) dialogData.source = dir;
                }
            }
            if (dirs.length > 1) {
                dialogData.sources.push(
                    {value: 'all', label: 'All ' + dirs.length + ' selected folders'}
                );
                dialogData.source = 'all';
            }
            if (dialogData.source === null) dialogData.source = dialogData.sources[0].value;

            dialogData.sources = dialogData.sources.concat(dirs);
            return dialogData;
        };

        ret.find = find;
        ret.getDialogData = getDialogData;

        return ret;
    }

}());