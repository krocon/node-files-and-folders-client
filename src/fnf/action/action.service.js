(function () {
    'use strict';

    /**
     * Execution of (action) code mapped by action key
     */
    angular
        .module('actionService', [])
        .factory('actionService', ActionService);

    ActionService.$inject = ['dataService', 'constantsService', 'dialogService', 'dialogActionMappingService', 'configService',
        'selectionService', 'notifyService', 'folderService', 'tabService', 'mainService',
        'deepSumSizeService', 'clipboardService', '$timeout', '$log'];

    function ActionService(dataService, constantsService, dialogService, dialogActionMappingService, configService,
                           selectionService, notifyService, folderService, tabService, mainService,
                           deepSumSizeService, clipboardService, $timeout, $log) {
        var ret = {};
        var data = dataService.getData();

        var loadDirectory = folderService.loadDirectory;
        var selectPanel = tabService.selectPanel;
        var selectLeftPanel = tabService.selectLeftPanel;
        var selectRightPanel = tabService.selectRightPanel;
        var togglePanel = tabService.togglePanel;
        //var getActiveTab = tabService.getActiveTab;
        var getTargetPanelIndex = mainService.getTargetPanelIndex;
        var getTargetDir = mainService.getTargetDir;
        var getSourcePanelIndex = mainService.getSourcePanelIndex;
        var getSourceDir = mainService.getSourceDir;
        var getDialogMetaData = dialogActionMappingService.getDialogMetaData;
        var openAndCompile = dialogService.openAndCompile;
        var selectAll = selectionService.selectAll;
        var deselectAll = selectionService.deselectAll;
        var toggleSelection = selectionService.toggleSelection;
        var saveconfig = configService.saveconfig;
        var addNewTabOnActivePanel = mainService.addNewTabOnActivePanel;
        var removeTabOnActivePanel = mainService.removeTabOnActivePanel;
        var navigateBack = mainService.navigateBack;
        var navigateDown = mainService.navigateDown;
        var onEnterPressed = mainService.onEnterPressed;
        var sumSize = deepSumSizeService.calcSumsForSelectedRow;
        var onHomePressed = mainService.onHomePressed;
        var onEndPressed = mainService.onEndPressed;
        var onPageUpPressed = mainService.onPageUpPressed;
        var onPageDownPressed = mainService.onPageDownPressed;
        var toggleCurrentRow = mainService.toggleCurrentRow;

        var copyNames = clipboardService.copyNames;
        var copyFullNames = clipboardService.copyFullNames;
        var copyNamesAsJson = clipboardService.copyNamesAsJson;
        var copyFullNamesAsJson = clipboardService.copyFullNamesAsJson;

        constantsService.applyConstants(ret);

        var openDialog = function openDialog(actionId) {
            var dlgData = getDialogMetaData(actionId);
            if (!dlgData) return $log.warn('ActionService.openDialog(' + actionId + '): No dialog data found for "' + actionId + '"!');

            dlgData.onShow = function () {
                notifyService.$emit(actionId + '_ON_SHOW', dlgData.id);
            };
            dlgData.onShown = function () {
                notifyService.$emit(actionId + '_ON_SHOWN', dlgData.id);
            };
            dlgData.onHidden = function () {
                notifyService.$emit(actionId + '_ON_HIDDEN', dlgData.id);
            };
            $log.info('ActionService.openDialog()', actionId);
            openAndCompile(dlgData);
        };
 


        var reloadDir = function reloadDir() {
            $timeout(function () {

                var setFocus = function setFocus(){
                    selectPanel(sourcePanelIndex);
                };
                var sourcePanelIndex = getSourcePanelIndex();

                // reload left and right panel:
                loadDirectory(getTargetPanelIndex(), {path: getTargetDir(), nocache: true}, setFocus);
                loadDirectory(sourcePanelIndex, {path: getSourceDir(), nocache: true}, setFocus);
            });
        };

        var action = function action(key) {
            if (key === ret.COPY_2_CLIPBOARD_FULLNAMES)  return copyFullNames();
            if (key === ret.COPY_2_CLIPBOARD_NAMES)  return copyNames();
            if (key === ret.COPY_2_CLIPBOARD_FULLNAMES_AS_JSON)  return copyFullNamesAsJson();
            if (key === ret.COPY_2_CLIPBOARD_NAMES_AS_JSON)  return copyNamesAsJson();
            if (key === ret.TOGGLE_SELECTION_CURRENT_ROW)  return toggleCurrentRow();
            if (key === ret.SPACE_PRESSED)  return sumSize();
            if (key === ret.ENTER_PRESSED)  return onEnterPressed();
            if (key === ret.HOME_PRESSED)  return onHomePressed();
            if (key === ret.END_PRESSED)  return onEndPressed();
            if (key === ret.PAGEUP_PRESSED)  return onPageUpPressed();
            if (key === ret.PAGEDOWN_PRESSED)  return onPageDownPressed();

            if (key === ret.RELOAD_DIR)  return reloadDir();
            if (key === ret.TOGGLE_PANEL)  return togglePanel();
            if (key === ret.SELECT_RIGHT_PANEL)  return selectRightPanel();
            if (key === ret.SELECT_LEFT_PANEL)  return selectLeftPanel();
            if (key === ret.SAVE_CONFIG)  return saveconfig();
            if (key === ret.SELECT_ALL)  return selectAll();
            if (key === ret.DESELECT_ALL)  return deselectAll();
            if (key === ret.TOGGLE_SELECTION)  return toggleSelection();
            if (key === ret.ADD_NEW_TAB)  return addNewTabOnActivePanel();
            if (key === ret.REMOVE_TAB)  return removeTabOnActivePanel();
            if (key === ret.NAVIGATE_BACK)  return navigateBack();
            if (key === ret.NAVIGATE_LEVEL_DOWN)  return navigateDown();

            if (key.indexOf('OPEN_') === 0) return openDialog(key);

            if (key !== 'DUMMY_ACTION') $log.warn('No action found for: ', key);
        };


        ret.action = action;
        ret.iam = 'actionService';
        return ret;
    }

}());