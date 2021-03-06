(function () {
    'use strict';

    // See: https://dmauro.github.io/Keypress/

    angular
        .module('keyboard', [])
        .factory('keyboardService', KeyboardService);

    KeyboardService.$inject = [];

    function KeyboardService() {
        var listener = new window.keypress.Listener();
        var ret = {};

        ret.simple_combo = listener.simple_combo.bind(listener); // Registers a very basic combo; simple_combo(keys, callback);

        ret.counting_combo = function counting_combo(keys, callback) {
            // Registers a counting combo
            listener.counting_combo(keys, callback);
        };
        ret.sequence_combo = function sequence_combo(keys, callback) {
            // Registers a sequence combo
            listener.sequence_combo(keys, callback);
        };
        ret.register_combo = function register_combo(combo_dictionary) {
            // Registers a combo from a dictionary
            listener.register_combo(combo_dictionary);
        };
        ret.register_many = function register_many(combo_dictionary_array) {
            // Registers an array of dictionaries
            listener.register_many(combo_dictionary_array);
        };
        ret.unregister_combo = function unregister_combo(keys_or_combo_dictionary) {
            // Unregisters a single combo
            listener.unregister_combo(keys_or_combo_dictionary);
        };
        ret.unregister_many = function unregister_many(array_of_keys_or_combo_dictionaries) {
            // Unregisters many combos
            listener.unregister_many(array_of_keys_or_combo_dictionaries);
        };
        ret.get_registered_combos = function get_registered_combos() {
            // Get a list of the combos registered with this listener
            return listener.get_registered_combos();
        };
        ret.reset = function reset() {
            // Unregister all combos
            listener.reset();
        };
        ret.listen = function listen() {
            // Begin listening. Listener is listening by default
            listener.listen();
        };
        ret.stop_listening = function stop_listening() {
            // Stop listening for combos until listen() is called again
            listener.stop_listening();
        };
        ret.destroy = function destroy() {
            // This will cleanup after the listener
            listener.destroy();
        };

        return ret;
    }

})();
