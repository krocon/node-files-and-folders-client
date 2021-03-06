(function () {
    'use strict';

    angular
        .module('app.keyboard', [])
        .factory('appKeyboardService', AppKeyboardService);

    AppKeyboardService.$inject = ['keyboardService', 'notifyService', 'mainService', '$log'];

    function AppKeyboardService(keyboardService, notifyService, mainService, $log) {
        $log.info('appKeyboardService...');
        var ret = {};

        var register_combo = keyboardService.register_combo;
        var unregister_combo = keyboardService.unregister_combo;
        //var simple_combo = keyboardService.simple_combo;
        //var counting_combo = keyboardService.counting_combo;
        //var sequence_combo = keyboardService.sequence_combo;
        //var register_many = keyboardService.register_many;
        //var unregister_many = keyboardService.unregister_many;
        //var get_registered_combos = keyboardService.get_registered_combos;
        //var reset = keyboardService.reset;
        //var listen = keyboardService.listen;
        //var stop_listening = keyboardService.stop_listening;
        //var destroy = keyboardService.destroy;

        var registeredCombos = [];

        var simpleLetterReg = / [a-z0-9]+$/;
        
        var addMainMenuShortcuts = function addMainMenuShortcuts(items) {
            for (var i = 0; i < items.length; i++) {
                (function (item) {
                    //$log.info(item.shortcut + ' -> item ID:', item.id);
                    var that = this;
                    var simpleLetter = item.shortcut.match(simpleLetterReg);
                    var combo = {
                        "keys"              : item.shortcut,
                        "on_keydown"        : null,
                        "on_keyup"          : function(e){
                            notifyService.emit(item.id);
                            return false;
                        },
                        "on_release"        : null,
                        "this"              : that,
                        "prevent_default"   : !simpleLetter,
                        "prevent_repeat"    : false,
                        "is_unordered"      : false,
                        "is_counting"       : false,
                        "is_exclusive"      : !simpleLetter, //false,
                        "is_solitary"       : false,
                        "is_sequence"       : false
                    };
                    registeredCombos.push(combo);
                    register_combo(combo);
                })(items[i]);
            }
        };
        var addToolShortcuts = function addToolShortcuts(tools) {
            for (var i = 0; i < tools.length; i++) {
                if (tools[i].shortcut) {
                    (function(tool){
                        //$log.info(tool.shortcut + ' -> Tool CMD:', tool.cmd);
                        var that = this;
                        var simpleLetter = tool.shortcut.match(simpleLetterReg);
                        var combo ={
                            "keys"              : tool.shortcut,
                            "on_keydown"        : null,
                            "on_keyup"          : function(e){
                                mainService.runTool(tool);
                                return false;
                            },
                            "on_release"        : null,
                            "this"              : that,
                            "prevent_default"   : !simpleLetter,
                            "prevent_repeat"    : false,
                            "is_unordered"      : false,
                            "is_counting"       : false,
                            "is_exclusive"      : !simpleLetter,
                            "is_solitary"       : false,
                            "is_sequence"       : false
                        };
                        registeredCombos.push(combo);
                        register_combo(combo);

                    })(tools[i]);
                }
            }
        };

        var unregisterMainShortcuts = function unregisterMainShortcuts(){
            //$log.info('appKeyboardService.unregisterMainShortcuts()', registeredCombos);
            for (var i = 0; i < registeredCombos.length; i++) {
                unregister_combo(registeredCombos[i].keys);
            }
        };
        var reregisterMainShortcuts = function reregisterMainShortcuts(){
            //$log.info('appKeyboardService.reregisterMainShortcuts()', registeredCombos);
            for (var i = 0; i < registeredCombos.length; i++) {
                register_combo(registeredCombos[i]);
            }
        };

        ret.iam = 'appKeyboardService';

        ret.unregisterMainShortcuts = unregisterMainShortcuts;
        ret.reregisterMainShortcuts = reregisterMainShortcuts;

        ret.addToolShortcuts = addToolShortcuts;
        ret.addMainMenuShortcuts = addMainMenuShortcuts;

        ret.register_combo = register_combo;
        ret.unregister_combo = unregister_combo;

        return ret;
    }

})();
