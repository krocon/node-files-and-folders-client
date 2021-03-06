(function () {
    'use strict';

    angular
        .module('tabService', [])
        .factory('tabService', TabService);

    TabService.$inject = ['dataService', 'gridService', 'folderService', '$timeout', '$log'];

    function TabService(dataService, gridService, folderService, $timeout, $log) {
        var data = dataService.getData();
        data.tabs = [
            // left (sideIndex===0):
            [
                {'path': '/', label: ' ', active: true}
            ],
            // right (sideIndex===1):
            [
                {'path': '/', label: '', active: true}
            ]
        ];

        var slash = function slash(s) {
            if (!s) return null;
            return s.replace(/\\/g, '/');
        };

        var eachActiveTab = function eachActiveTab(cb) {
            var tabs = data.tabs;
            for (var si = 0; si < tabs.length; si++) {
                var side = tabs[si];
                for (var ti = 0; ti < side.length; ti++) {
                    var t = side[ti];
                    if (t.active) {
                        cb(t, si, ti);
                    }
                }
            }
        };

        var tabClickedTimeout = null;
        var onTabClicked = function onTabClicked(panelIndex, tab, callback) {
            if (tabClickedTimeout) $timeout.cancel(tabClickedTimeout);
            tabClickedTimeout = $timeout(function () {
                selectTab(panelIndex, tab);
                callback(panelIndex, tab);
                tabClickedTimeout = null
            }, 222);
        };
        var onTabDblclicked = function onTabDblclicked(panelIndex, tab, callback) {
            if (tabClickedTimeout) $timeout.cancel(tabClickedTimeout);
            removeTab(panelIndex, tab, callback);
        };
        /**
         *
         * @param panelIndex
         * @param tab
         * @param callback   function (newActiveTab){}. Only called, if active state was changed.
         */
        var removeTab = function removeTab(panelIndex, tab, callback) {
            if (data.tabs[panelIndex].length < 2) return;

            var i = data.tabs[panelIndex].indexOf(tab);
            if (i > -1) {
                data.tabs[panelIndex].splice(i, 1);
            }
            if (tab.active) {
                var tabIndex = Math.max(0, i - 1);
                data.tabs[panelIndex][tabIndex].active = true;
                callback(data.tabs[panelIndex][tabIndex]);
            }
        };
        var addTab = function addTab(panelIndex, callback) {
            $timeout(function(){
                var t = getActiveTab(panelIndex);
                var tab = {path: slash(t.path), label: t.label};
                if (tab.fileList) {
                    tab.path = '';
                    tab.label = '';
                }
                data.tabs[panelIndex].push(tab);
                selectTab(panelIndex, tab);
                callback(panelIndex, tab);
            });
        };
        var selectTab = function selectTab(panelIndex, tab) {
            var tabs = data.tabs[panelIndex];
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].active = (tab === tabs[i]);
            }
        };

        var getNextTab = function getNextTab(panelIndex) {
            var tabs = data.tabs[panelIndex];
            var idx = getActiveTabIndex(panelIndex);
            idx++;
            if (idx < tabs.length) return tabs[idx];
            return tabs[0];
        };

        var loadDirectory = folderService.loadDirectory;
        var selectNextTab = function selectNextTab(panelIndex) {
            var tab = getNextTab(panelIndex);
            onTabClicked(panelIndex, tab, function (panelIndex, tab) {
                loadDirectory(panelIndex, {path: tab.path}, function (panelIndex, opt) {
                    gridService.autoFocusedCell(panelIndex);
                });
            });
        };

        var getActiveTabIndex = function getActiveTabIndex(panelIndex) {
            var tabs = data.tabs[panelIndex];
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].active) return i;
            }
            return 0;
        };

        var getTabCount = function getTabCount(sideIndex) {
            return data.tabs[sideIndex].length;
        };

        var getActiveTab = function getActiveTab(sideIndex) {
            var tabs = data.tabs[sideIndex];
            for (var i = 0; i < tabs.length; i++) {
                var t = tabs[i];
                if (t.active) return t;
            }
            return null;
        };

        var getTabs = function getTabs(sideIndex) {
            return data.tabs[sideIndex];
        };

        var selectLeftPanel = function selectLeftPanel() {
            selectPanelAndNextTab(0);
        };

        var selectRightPanel = function selectRightPanel() {
            selectPanelAndNextTab(1);
        };

        var selectPanelAndNextTab = function selectPanelAndNextTab(panelIndex) {
            $timeout(function () {
                //$log.info('----------------------------------------');
                //$log.info('data.activePanelIndex', data.activePanelIndex);
                //$log.info('panelIndex', panelIndex);
                if (data.activePanelIndex === panelIndex) {
                    // panel was activated. select next tab:
                    selectNextTab(panelIndex);
                } else {
                    // activate panel:
                    data.activePanelIndex = panelIndex;
                    gridService.autoFocusedCell(panelIndex);
                }
            });
        };

        var togglePanel = function togglePanel() {
            selectPanel(Math.abs(data.activePanelIndex - 1));
        };

        var selectPanel = function selectPanel(panelIndex) {
            $timeout(function () {
                // activate panel:
                data.activePanelIndex = panelIndex;
                gridService.autoFocusedCell(panelIndex);
            });
        };

        var ret = {};
        ret.togglePanel = togglePanel;
        ret.selectRightPanel = selectRightPanel;
        ret.selectLeftPanel = selectLeftPanel;
        ret.selectPanel = selectPanel;
        ret.eachActiveTab = eachActiveTab;
        ret.getTabCount = getTabCount;
        ret.addTab = addTab;
        ret.getActiveTab = getActiveTab;
        ret.getTabs = getTabs;
        ret.selectTab = selectTab;
        ret.onTabClicked = onTabClicked;
        ret.onTabDblclicked = onTabDblclicked;
        ret.iam = 'tabService';
        return ret;
    }

}());