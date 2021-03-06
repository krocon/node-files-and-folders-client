(function () {
    'use strict';

    angular
        .module('DeselectionController', [])
        .controller('DeselectionController', DeselectionController);

    DeselectionController.$inject = [
        'notifyService',
        'constantsService',
        '$log'];

    function DeselectionController(notifyService, constantsService, $log) {
        var vm = this;
        vm.data = {};
        vm.data.quickinput = '';

        vm.setQuickinput = function setQuickinput(s) {
            vm.data.quickinput = s;
        };

        vm.ok = function ok() {
            notifyService.emit(constantsService.REDUCE_SELECTION, vm.data.quickinput);
        };
    }

}());