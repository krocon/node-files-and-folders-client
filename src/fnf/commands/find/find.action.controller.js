(function () {
    'use strict';

    angular
        .module('FindActionController', [])
        .controller('FindActionController', FindActionController);

    FindActionController.$inject = [
        'findActionService',
        'notifyService',
        '$log'];

    function FindActionController(findActionService, notifyService, $log) {
        $log.info('FindActionController...');

        var vm = this;
        vm.data = {};

        vm.setQuickinput = function setQuickinput(s) {
            vm.data.quickinput = s;
        };

        vm.ok = function ok() {
            findActionService.find();
        };

        var init = function init() {
            vm.data = findActionService.getDialogData();
            $log.info('FindActionController.init()...', vm.data);
        };

        notifyService
            .removeListenersForKey('OPEN_FIND_DLG_ON_SHOW')
            .removeListenersForKey('OPEN_FIND_DLG_ON_SHOWN')
            .removeListenersForKey('OPEN_FIND_DLG_ON_HIDDEN')
            .addListener('OPEN_FIND_DLG_ON_SHOW', init);
    }

}());