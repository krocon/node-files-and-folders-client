(function () {
    'use strict';

    angular
        .module('dropzoneDirective', [])
        .directive('dropzone', dropzoneDirective);

    dropzoneDirective.$inject = ['notifyService', '$log'];

    function dropzoneDirective(notifyService, $log) {

        var idx = 0;

        // http://www.html5rocks.com/en/tutorials/file/dndfiles/
        function handleFileSelect(evt) {
            $log.info('handleFileSelect', evt);
            evt.stopPropagation();
            evt.preventDefault();

            var files = evt.dataTransfer.files; // FileList object.
            notifyService.$emit('FILES_DROPPED', files);
        }

        function handleDragOver(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        }
        function handleDragEnter(evt) {
            $log.info(evt);
            evt.stopPropagation();
            evt.preventDefault();
            evt.target.classList.add("alert-success");
        }
        function handleDragLeave(evt) {
            $log.info(evt.target.classList);
            evt.stopPropagation();
            evt.preventDefault();
            evt.target.classList.remove("alert-success");
        }

        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                var id = ele.attr('id');
                if (!id) {
                    id = 'dopzone_' + (idx++);
                    ele.attr('id', id);
                }
                var element = document.getElementById(id);
                element.addEventListener('dragenter', handleDragEnter, false);
                element.addEventListener('dragleave', handleDragLeave, false);
                element.addEventListener('dragover', handleDragOver, false);
                element.addEventListener('drop', handleFileSelect, false);

                $log.info('element', element);

                //element.bind('dragover', handleDragOver, false);
                //element.bind('drop', handleDragOver, false);
            }
        }
    }

})();