(function () {
    'use strict';

    angular
        .module('selectionService', [])
        .factory('selectionService', selectionService);

    selectionService.$inject = ['mainService', 'notifyService', 'constantsService', '$log'];

    function selectionService(mainService, notifyService, constantsService, $log) {
        $log.info('selectionService...');

        var ret = {};
        var getSourceGridApi = mainService.getSourceGridApi;

        var enhanceSelection = function enhanceSelection(pattern) {
            var api = getSourceGridApi();
            api.forEachNodeAfterFilter(function (node) {
                if (!api.isNodeSelected(node)) {
                    var row = node.data;
                    if (row.base.match(pattern)) {
                        api.selectNode(node, true /* multi */);
                    }
                }
            });
        };
        var reduceSelection = function reduceSelection(pattern) {
            var api = getSourceGridApi();
            api.forEachNodeAfterFilter(function (node) {
                if (api.isNodeSelected(node)) {
                    var row = node.data;
                    if (row.base.match(pattern)) {
                        api.deselectNode(node); //, true /* multi */);
                    }
                }
            });
        };
        var selectAll = function selectAll() {
            //getSourceGridApi().selectAll();
            var api = getSourceGridApi();
            api.forEachNodeAfterFilter(function (node) {
                if (!api.isNodeSelected(node)) {
                    api.selectNode(node, true /* multi */);
                }
            });
        };
        var deselectAll = function deselectAll() {
            //getSourceGridApi().deselectAll();
            var api = getSourceGridApi();
            api.forEachNodeAfterFilter(function (node) {
                if (api.isNodeSelected(node)) {
                    api.deselectNode(node, true /* multi */);
                }
            });
        };
        var toggleSelection = function toggleSelection() {
            var api = getSourceGridApi();
            api.forEachNodeAfterFilter(function (node) {
                if (api.isNodeSelected(node)) {
                    api.deselectNode(node, true /* multi */);
                } else {
                    api.selectNode(node, true /* multi */);
                }
            });
        };

        notifyService.addListener(constantsService.ENHANCE_SELECTION, enhanceSelection);
        notifyService.addListener(constantsService.REDUCE_SELECTION, reduceSelection);

        ret.selectAll = selectAll;
        ret.deselectAll = deselectAll;
        ret.toggleSelection = toggleSelection;
        ret.iam = 'selectionService';
        return ret;
    }
}());