(function () {
    'use strict';

    angular
        .module('SelectionController', [])
        .controller('SelectionController', SelectionController);

    SelectionController.$inject = [
        'notifyService',
        'constantsService',
        '$log'];

    function SelectionController(notifyService, constantsService, $log) {
        var vm = this;
        vm.data = {};
        vm.data.quickinput = '.';

        vm.setQuickinput = function setQuickinput(s) {
            vm.data.quickinput = s;
        };

        vm.ok = function ok() {
            notifyService.emit(constantsService.ENHANCE_SELECTION, vm.data.quickinput);
        };
    }

}());