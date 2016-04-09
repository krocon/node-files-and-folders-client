angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/fnf/drop/dialog.html","<div id=\"fnf-drop-action-dialog\" ng-controller=\"DropActionController as dnd\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Drop (not implemented yet)</h4></div><div class=\"modal-body\"><div class=\"horizontal layout\"><div class=\"flex-1\"><div><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 alert\" ng-class=\"{\'alert-success\':dnd.what===\'copy\'}\" dropzone><br><br><br><br>Drop here for upload...<br><br><br><br></div></div></div></div></div><div class=\"modal-footer\"><span drag-enter=\"dnd.select(\'cancel\')\"><span drag-leave=\"dnd.clear(\'cancel\')\"><button ng-class=\"{\'alert-success\':dnd.what===\'cancel\'}\" drop=\"dnd.closeDlg()\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button></span></span></div></div></div></div>");
$templateCache.put("/fnf/action/gotoanything/dialog.html","<div class=\"fullheight modal fade from-left\" id=\"gotoAnythingModal\" data-backdrop=\"true\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-body fullbleed layout vertical fit\" ng-controller=\"GotoAnythingController as g2a\"><form class=\"layout horizontal xxxbg-inverse\"><h4 class=\"pull-left\" data-dismiss=\"modal\">&nbsp;<i class=\"fa fa-arrow-circle-o-left\"></i>&nbsp;&nbsp;</h4><input autofocus class=\"form-control flex\" type=\"text\" placeholder=\"Go to anything\" ng-model=\"g2a.selected\" ng-dblclick=\"g2a.selected= \'\'\" typeahead-show-hint=\"true\" uib-typeahead=\"cmd as cmd.label for cmd in g2a.commands | filter:$viewValue | limitTo:12\"> <button fnf-click-on-ctrl-enter type=\"button\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\" ng-click=\"g2a.execute()\">Execute</button></form></div></div></div></div>");
$templateCache.put("/fnf/action/jobqueue/dialog.html","<div class=\"fullscreen modal fade from-right\" id=\"jobqueueModal\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-body fullbleed layout vertical fit\" ng-controller=\"JobQueueController as job\"><div><button type=\"button\" class=\"btn btn-link pull-right\" data-dismiss=\"modal\">&times;</button><div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 pull-left\"><h4><i class=\"fa fa-arrow-circle-o-right\" data-dismiss=\"modal\"></i> Job Queue</h4></div></div><div id=\"fnf-jobs-grid-container\" class=\"fnf-grid-container scroll flex horizontal layout fnf-active-panel\"><div id=\"fnf-jobs-grid\" class=\"fnf-grid\" ag-grid=\"job.gridOptions\"></div></div><div class=\"horizontal layout fnf-panel-bg\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\"><button type=\"button\" class=\"btn btn-secondary pull-left\" ng-show=\"job.getQueueStatus()===\'ERROR\'\" ng-click=\"job.next(0)\">Restart Queue</button> <button type=\"button\" class=\"btn btn-secondary pull-right\" data-dismiss=\"modal\">Close</button></div></div></div></div></div></div>");
$templateCache.put("/fnf/commands/chdir/dialog.html","<div class=\"fullscreen modal fade from-right\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-body fullbleed layout vertical fit\" ng-controller=\"ChdirActionController as chdir\"><div><button type=\"button\" class=\"btn btn-link pull-right\" data-dismiss=\"modal\">&times;</button><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 pull-left\"><h4><i class=\"fa fa-arrow-circle-o-right\" data-dismiss=\"modal\"></i> &nbsp;Change Dir</h4></div><div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 pull-left\"><input autofocus class=\"form-control\" type=\"text\" placeholder=\"Filter\" ng-dblclick=\"chdir.gridOptions.quickFilterText = \'\'\" ng-model=\"chdir.gridOptions.quickFilterText\"></div><div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 pull-left\"><h4 ng-show=\"chdir.running\" ng-click=\"chdir.cancelWalk()\"><i class=\"fa fa-circle-o-notch fa-spin pull-right\"></i></h4></div></div><div id=\"fnf-chdir-grid-container\" class=\"fnf-grid-container scroll flex horizontal layout fnf-active-panel\"><div id=\"fnf-chdir-grid\" class=\"fnf-grid\" ag-grid=\"chdir.gridOptions\"></div></div><div class=\"horizontal layout fnf-panel-bg\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\"><button fnf-click-on-ctrl-enter type=\"button\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\" ng-click=\"chdir.chdirClicked()\">Chdir</button> <button type=\"button\" class=\"btn btn-secondary pull-right\" data-dismiss=\"modal\">Close</button></div></div></div></div></div></div>");
$templateCache.put("/fnf/commands/copy/dialog.html","<div id=\"fnf-copy-action-dialog\" ng-controller=\"CopyActionController as copy\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Copy</h4></div><div class=\"modal-body\"><fieldset class=\"form-group\"><label>Source <span class=\"text-muted\" ng-show=\"copy.scanning\">&nbsp;&nbsp;&nbsp;scanning...{{copy.sum}} <i class=\"fa fa-refresh fa-spin\"></i></span></label><input readonly=\"readonly\" type=\"text\" class=\"form-control\" aria-label=\"Target folder\" ng-model=\"copy.sourceText\"></fieldset><fieldset class=\"form-group\"><label>Target</label><div class=\"input-group\"><input autofocus type=\"text\" class=\"form-control\" aria-label=\"Target folder\" ng-model=\"copy.targetDir\"><div class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button><div class=\"dropdown-menu dropdown-menu-right\"><a ng-repeat=\"f in copy.getPossibleTargetFolders() track by $index\" class=\"dropdown-item\" href=\"#\" ng-bind=\"f\" ng-click=\"copy.setTargetDir(f)\"></a></div></div></div></fieldset><div ng-show=\"copy.optionsVisible\">TODO Options</div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary pull-left\" ng-click=\"copy.toggleOptions()\">Options</button> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button> <button fnf-click-on-ctrl-enter type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!copy.okEnabled\" ng-click=\"copy.copy()\">Copy</button></div></div></div></div>");
$templateCache.put("/fnf/commands/delete/dialog.html","<div id=\"fnf-delete-action-dialog\" ng-controller=\"DeleteActionController as del\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Delete</h4></div><div class=\"modal-body\"><fieldset class=\"form-group\"><label>Selected <span class=\"text-muted\" ng-show=\"del.scanning\">&nbsp;&nbsp;&nbsp;scanning...{{del.sum}} <i class=\"fa fa-refresh fa-spin\"></i></span></label><input readonly=\"readonly\" type=\"text\" class=\"form-control\" aria-label=\"Target folder\" ng-model=\"del.sourceText\"></fieldset></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button> <button fnf-click-on-ctrl-enter type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!del.okEnabled\" ng-click=\"del.callDelete()\">Delete</button></div></div></div></div>");
$templateCache.put("/fnf/commands/deleteemptyfolders/dialog.html","<div id=\"fnf-deleteemptyfolders-action-dialog\" ng-controller=\"DeleteEmptyFoldersActionController as del\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Delete empty folders</h4></div><div class=\"modal-body\"><fieldset class=\"form-group\"><label>Start folder</label><input readonly=\"readonly\" type=\"text\" class=\"form-control\" aria-label=\"Target folder\" ng-model=\"del.sourceText\"></fieldset></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button> <button fnf-click-on-ctrl-enter type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!del.okEnabled\" ng-click=\"del.callDeleteEmptyFolders()\">Delete</button></div></div></div></div>");
$templateCache.put("/fnf/commands/find/dialog.html","<div id=\"fnf-find-dialog\" ng-controller=\"FindActionController as find\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\" id=\"gridModalLabel\">Find</h4></div><div class=\"modal-body\"><div><form class=\"form\"><fieldset class=\"form-group col-sm-12\"><label>Search in&nbsp;</label><select class=\"form-control c-select\" ng-model=\"find.data.source\"><option ng-repeat=\"i in find.data.sources\" value=\"{{i.value}}\" ng-bind=\"i.label\"></option></select></fieldset><fieldset class=\"form-group col-sm-12\"><label>Search for&nbsp;</label><div class=\"input-group\"><input autofocus type=\"text\" class=\"form-control\" ng-model=\"find.data.quickinput\" placeholder=\"pattern\"> <a href=\"javascript:void(0)\" class=\"input-group-addon dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"javascript:void(0)\" ng-click=\"find.setQuickinput(\'.cbr$|.cbz$\')\">.cbr$|.cbz$</a></li><li><a href=\"javascript:void(0)\" ng-click=\"find.setQuickinput(\'.js(.){0,2}$\')\">.jsp$</a></li><li><a href=\"javascript:void(0)\" ng-click=\"find.setQuickinput(\'.epub$\')\">.epub$</a></li><li><a href=\"javascript:void(0)\" ng-click=\"find.setQuickinput(\'.jpg$|.jpeg$|.png$|.gif$|.bmp$\')\">.</a></li></ul></div></fieldset></form><br><br>.</div></div><div class=\"modal-footer\"><button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">Cancel</button> <button fnf-click-on-ctrl-enter data-dismiss=\"modal\" aria-hidden=\"true\" data-ng-click=\"find.ok();\" class=\"btn btn-primary\">Find</button></div></div></div></div>");
$templateCache.put("/fnf/commands/finddublicates/dialog.html","<div class=\"fullscreen modal fade from-bottom\" id=\"findDublicatesModal\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-body fullbleed layout vertical fit\"><div><button type=\"button\" class=\"btn btn-link pull-right\" data-dismiss=\"modal\">&times;</button><div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 pull-left\"><h4>Find dublicates</h4></div></div><div class=\"scroll flex horizontal layout\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pull-left\">Content...</div></div><div class=\"horizontal layout fnf-panel-bg\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\"><button type=\"button\" class=\"btn btn-secondary pull-right\" data-dismiss=\"modal\">Close</button></div></div></div></div></div></div>");
$templateCache.put("/fnf/commands/groupfiles/dialog.html","<div id=\"fnf-groupfiles-action-dialog\" class=\"fullscreen modal fade from-bottom\" ng-controller=\"GroupfilesActionController as gf\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-body fullbleed layout vertical fit\"><div><button type=\"button\" class=\"btn btn-link pull-right\" data-dismiss=\"modal\">&times;</button><div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 pull-left\"><h4><i class=\"fa fa-arrow-circle-o-down\" data-dismiss=\"modal\"></i> Group files</h4></div></div><div><form class=\"form-inline\"><fieldset class=\"form-group col-sm-3\"><label>Mode&nbsp;</label><select autofocus class=\"form-control c-select\" ng-model=\"gf.data.modus\" ng-change=\"gf.updateTableModel()\"><option ng-repeat=\"i in gf.data.modes\" value=\"{{i.value}}\" ng-bind=\"i.label\"></option></select></fieldset><fieldset class=\"form-group col-sm-3\" ng-show=\"gf.data.modus === \'new_folder\'\"><input class=\"form-control\" type=\"text\" ng-model=\"gf.data.newFolder\" ng-change=\"gf.updateTableModel()\" placeholder=\"Folder Name\"></fieldset><fieldset class=\"form-group col-sm-2\" ng-show=\"gf.data.modus !== \'new_folder\'\"><label><input class=\"form-control\" type=\"checkbox\" ng-model=\"gf.data.ignoreBrackets\" ng-click=\"gf.updateTableModel()\"> Ignore Brackets</label><select class=\"form-control invisible\"></select></fieldset><fieldset class=\"form-group col-sm-2\"><label><input class=\"form-control\" type=\"checkbox\" ng-model=\"gf.data.useSsourceDir\" ng-click=\"gf.updateTableModel()\"> Use Source Dir</label><select class=\"form-control invisible\"></select></fieldset><fieldset ng-show=\"gf.data.modus===\'runnig_number\'\" class=\"form-group col-sm-3\"><label>Minimal group size&nbsp;</label><select class=\"form-control c-select\" ng-model=\"gf.data.minsize\" ng-change=\"gf.updateTableModel()\"><option ng-repeat=\"i in gf.data.minsizes\" value=\"{{i.value}}\" ng-bind=\"i.label\"></option></select></fieldset><fieldset ng-show=\"gf.data.modus===\'runnig_number\'\" class=\"form-group col-sm-2 text-muted\"><label ng-bind=\"gf.data.groupCount\"></label><label>&nbsp;groups found</label><select class=\"form-control invisible\"></select></fieldset></form></div><div id=\"fnf-groupfiles-grid-container\" class=\"fnf-grid-container scroll flex horizontal layout\"><div id=\"fnf-groupfiles-grid\" class=\"fnf-grid\" ag-grid=\"gf.data.gridOptions\"></div></div><div class=\"horizontal layout fnf-panel-bg\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\"><button fnf-click-on-ctrl-enter type=\"button\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\" ng-disabled=\"!gf.data.okEnabled\" ng-click=\"gf.move()\">Move</button> <button type=\"button\" class=\"btn btn-secondary pull-right\" data-dismiss=\"modal\" ng-disabled=\"!gf.data.okEnabled\" ng-click=\"gf.copy()\">Copy</button> <button type=\"button\" class=\"btn btn-secondary pull-right\" data-dismiss=\"modal\">Cancel</button></div></div></div></div></div></div>");
$templateCache.put("/fnf/commands/mkdir/dialog.html","<div id=\"fnf-mkdir-action-dialog\" ng-controller=\"MkdirActionController as mkdir\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Make Directory</h4></div><div class=\"modal-body\"><form class=\"form-inline\"><fieldset class=\"form-group\"><label ng-bind=\"mkdir.targetDir + \'/ \'\"></label>&nbsp; <input autofocus type=\"text\" class=\"form-control\" aria-label=\"Target folder\" ng-model=\"mkdir.name\"></fieldset></form></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button> <button fnf-click-on-ctrl-enter type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!mkdir.targetDir\" ng-click=\"mkdir.mkdir()\">MkDir</button></div></div></div></div>");
$templateCache.put("/fnf/commands/move/dialog.html","<div id=\"fnf-move-action-dialog\" ng-controller=\"MoveActionController as move\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Move</h4></div><div class=\"modal-body\"><fieldset class=\"form-group\"><label>Source <span class=\"text-muted\" ng-show=\"copy.move\">&nbsp;&nbsp;&nbsp;scanning...{{move.sum}} <i class=\"fa fa-refresh fa-spin\"></i></span></label><input readonly=\"readonly\" type=\"text\" class=\"form-control\" aria-label=\"Target folder\" ng-model=\"move.sourceText\"></fieldset><fieldset class=\"form-group\"><label>Target</label><div class=\"input-group\"><input autofocus type=\"text\" class=\"form-control\" aria-label=\"Target folder\" ng-model=\"move.targetDir\"><div class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button><div class=\"dropdown-menu dropdown-menu-right\"><a ng-repeat=\"f in move.getPossibleTargetFolders() track by $index\" class=\"dropdown-item\" href=\"#\" ng-bind=\"f\" ng-click=\"move.setTargetDir(f)\"></a></div></div></div></fieldset><div ng-show=\"move.optionsVisible\">TODO Options</div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary pull-left\" ng-click=\"move.toggleOptions()\">Options</button> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button> <button fnf-click-on-ctrl-enter type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!move.okEnabled\" ng-click=\"move.move()\">Move</button></div></div></div></div>");
$templateCache.put("/fnf/commands/multirename/dialog.html","<div id=\"fnf-multirename-action-dialog\" class=\"fullscreen modal fade from-bottom\" ng-controller=\"MultirenameActionController as multirename\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-body fullbleed layout vertical fit\"><div><button type=\"button\" class=\"btn btn-link pull-right\" data-dismiss=\"modal\">&times;</button><div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 pull-left\"><h4><i class=\"fa fa-arrow-circle-o-down\" data-dismiss=\"modal\"></i> Multi Rename</h4></div></div><div><form class=\"form\"><fieldset class=\"form-group col-sm-3\" style=\"margin-bottom: 0\"><label for=\"nameInput\">New Name</label><input autofocus type=\"text\" class=\"form-control form-group col-sm-6\" id=\"nameInput\" placeholder=\"[N].[E]\" ng-model=\"multirename.data.name\" ng-dblclick=\"multirename.data.name=\'[N].[E]\';multirename.softUpdateTableModel();\" ng-change=\"multirename.softUpdateTableModel()\"></fieldset><fieldset class=\"form-group col-sm-3\"><label>Capitalize</label><select class=\"form-control c-select\" ng-model=\"multirename.data.capitalizeMode\" ng-change=\"multirename.softUpdateTableModel()\"><option ng-repeat=\"i in multirename.options.capitalizeModes\" value=\"{{i.value}}\" ng-bind=\"i.label\"></option></select></fieldset><fieldset class=\"form-group col-sm-2\"><label>Counter Start</label><select class=\"form-control c-select\" ng-model=\"multirename.data.counterStart\" ng-change=\"multirename.softUpdateTableModel()\"><option ng-repeat=\"i in multirename.options.starts\" value=\"{{i.value}}\" ng-bind=\"i.label\"></option></select></fieldset><fieldset class=\"form-group col-sm-2\"><label>Counter Step</label><select class=\"form-control c-select\" ng-model=\"multirename.data.counterStep\" ng-change=\"multirename.softUpdateTableModel()\"><option ng-repeat=\"i in multirename.options.steps\" value=\"{{i.value}}\" ng-bind=\"i.label\"></option></select></fieldset><fieldset class=\"form-group col-sm-2\"><label>Counter Digits</label><select class=\"form-control c-select\" ng-model=\"multirename.data.counterDigits\" ng-change=\"multirename.softUpdateTableModel()\"><option ng-repeat=\"i in multirename.options.digits\" value=\"{{i.value}}\" ng-bind=\"i.label\"></option></select></fieldset><fieldset class=\"form-group col-sm-12\"><label>[N] Name, [N#-#] Part of Name, [E] Extension, [E#-#] Part of Ext, [C] Counter, [P] Parent Dir</label></fieldset></form><form class=\"form form-inline\"><fieldset class=\"form-group col-sm-2\"><label class=\"c-input c-checkbox\"><input type=\"checkbox\" ng-model=\"multirename.data.replaceGermanUmlauts\" ng-click=\"multirename.softUpdateTableModel()\"> <span class=\"c-indicator\"></span> Fix german umlauts</label></fieldset><fieldset class=\"form-group col-sm-2\"><label class=\"c-input c-checkbox\"><input class=\"form-control\" type=\"checkbox\" ng-model=\"multirename.data.replaceRiskyChars\" ng-click=\"multirename.softUpdateTableModel()\"> <span class=\"c-indicator\"></span> Replace risky chars</label></fieldset><fieldset class=\"form-group col-sm-2\"><label class=\"c-input c-checkbox\"><input class=\"form-control\" type=\"checkbox\" ng-model=\"multirename.data.replaceSpaceToUnderscore\" ng-click=\"multirename.softUpdateTableModel()\"> <span class=\"c-indicator\"></span> Space to underscore</label></fieldset><fieldset class=\"form-group col-sm-2\"><label class=\"c-input c-checkbox\"><input class=\"form-control\" type=\"checkbox\" ng-model=\"multirename.data.replaceParentDir\" ng-click=\"multirename.softUpdateTableModel()\"> <span class=\"c-indicator\"></span> Remove parent dir</label></fieldset></form><form class=\"form form-inline\"><fieldset class=\"form-group col-sm-12\"><label class=\"c-input c-checkbox\"><input class=\"form-control\" type=\"checkbox\" ng-model=\"multirename.data.replacementsChecked\" ng-click=\"multirename.softUpdateTableModel()\"> <span class=\"c-indicator\"></span> Search and replace</label></fieldset><fieldset class=\"form-group col-sm-12 fnf-replacements\" ng-show=\"multirename.data.replacementsChecked\" ng-repeat=\"rep in multirename.data.replacements\"><label class=\"c-input c-checkbox\"><input class=\"form-control\" type=\"checkbox\" ng-model=\"rep.checked\" ng-click=\"multirename.softUpdateTableModel()\"> <span class=\"c-indicator\"></span> Replace</label><button class=\"btn btn-link brn-sm dropdown-toggle\" type=\"button\" id=\"dropdownMenu{{$index}}\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button><div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu{{$index}}\"><a ng-repeat=\"makro in multirename.data.makros\" ng-click=\"multirename.makroSelected(rep, makro)\" class=\"dropdown-item\" href=\"#\"><div ng-bind=\"makro.title\"></div><div ng-bind=\"makro.example\" class=\"text-muted\"></div></a></div><input type=\"text\" class=\"form-control form-control-sm fnf-mr-textfrom\" id=\"textFrom{{$index}}\" ng-model=\"rep.textFrom\" ng-disabled=\"!rep.checked\" ng-change=\"multirename.softUpdateTableModel()\"><label>with</label><input type=\"text\" class=\"form-control form-control-sm\" ng-model=\"rep.textTo\" ng-disabled=\"!rep.checked\" ng-change=\"multirename.softUpdateTableModel()\"><label class=\"c-input c-checkbox\"><input class=\"form-control\" type=\"checkbox\" ng-model=\"rep.regExpr\" ng-click=\"multirename.softUpdateTableModel()\"> <span class=\"c-indicator\"></span> RegExp</label><label class=\"c-input c-checkbox\"><input class=\"form-control\" type=\"checkbox\" ng-model=\"rep.ifFlag\" ng-click=\"multirename.softUpdateTableModel()\"> <span class=\"c-indicator\"></span> only if match</label><input type=\"text\" class=\"form-control form-control-sm\" ng-model=\"rep.ifMatch\" ng-disabled=\"!rep.ifFlag || !rep.checked\" ng-change=\"multirename.softUpdateTableModel()\"></fieldset></form></div><div id=\"fnf-groupfiles-grid-container\" class=\"fnf-grid-container scroll flex horizontal layout\"><div id=\"fnf-multirename-grid\" class=\"fnf-grid\" ag-grid=\"multirename.data.gridOptions\"></div></div><div class=\"horizontal layout fnf-panel-bg\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\"><button type=\"button\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\" ng-disabled=\"!multirename.data.okEnabled\" ng-click=\"multirename.multirename()\">Rename</button> <button type=\"button\" class=\"btn btn-secondary pull-right\" data-dismiss=\"modal\">Cancel</button></div></div></div></div></div></div>");
$templateCache.put("/fnf/commands/rename/dialog.html","<div id=\"fnf-rename-action-dialog\" ng-controller=\"RenameActionController as rename\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Rename</h4></div><div class=\"modal-body\"><fieldset class=\"form-group\"><label>Current Name</label><input readonly=\"readonly\" type=\"text\" class=\"form-control\" aria-label=\"Target folder\" ng-model=\"rename.sourceText\"></fieldset><fieldset class=\"form-group\"><label>New Name</label><input autofocus type=\"text\" class=\"form-control\" aria-label=\"Target folder\" ng-model=\"rename.targetText\"></fieldset><div ng-show=\"rename.optionsVisible\">TODO Options</div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button> <button fnf-click-on-ctrl-enter type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!rename.targetText\" ng-click=\"rename.rename()\">Rename</button></div></div></div></div>");
$templateCache.put("/fnf/commands/select/deselectdialog.html","<div id=\"fnf-deselection-dialog\" ng-controller=\"DeselectionController as desel\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog modal-sm\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\" id=\"gridModalLabel\">Reduce selections</h4></div><div class=\"modal-body\"><fieldset><span class=\"input-group\"><input autofocus type=\"text\" class=\"form-control\" ng-model=\"desel.data.quickinput\"> <a href=\"javascript:void(0)\" class=\"input-group-addon dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"javascript:void(0)\" ng-click=\"desel.setQuickinput(\'.jsp$\')\">*.jsp</a></li><li><a href=\"javascript:void(0)\" ng-click=\"desel.setQuickinput(\'.epub$\')\">*.epub</a></li><li><a href=\"javascript:void(0)\" ng-click=\"desel.setQuickinput(\'.\')\">*.*</a></li></ul></span></fieldset></div><div class=\"modal-footer\"><button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">Cancel</button> <button fnf-click-on-ctrl-enter data-dismiss=\"modal\" aria-hidden=\"true\" data-ng-click=\"desel.ok();\" class=\"btn btn-primary\">OK</button></div></div></div></div>");
$templateCache.put("/fnf/commands/select/selectdialog.html","<div id=\"fnf-selection-dialog\" ng-controller=\"SelectionController as sel\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog modal-sm\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\" id=\"gridModalLabel\">Enhance selections</h4></div><div class=\"modal-body\"><fieldset><span class=\"input-group\"><input autofocus type=\"text\" class=\"form-control\" ng-model=\"sel.data.quickinput\"> <a href=\"javascript:void(0)\" class=\"input-group-addon dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"javascript:void(0)\" ng-click=\"sel.setQuickinput(\'.cbr$|.cbz$\')\">.cbr$|.cbz$</a></li><li><a href=\"javascript:void(0)\" ng-click=\"sel.setQuickinput(\'.jsp\')\">.jsp$</a></li><li><a href=\"javascript:void(0)\" ng-click=\"sel.setQuickinput(\'.epub\')\">.epub$</a></li><li><a href=\"javascript:void(0)\" ng-click=\"sel.setQuickinput(\'.\')\">.</a></li></ul></span></fieldset></div><div class=\"modal-footer\"><button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">Cancel</button> <button fnf-click-on-ctrl-enter data-dismiss=\"modal\" aria-hidden=\"true\" data-ng-click=\"sel.ok();\" class=\"btn btn-primary\">OK</button></div></div></div></div>");
$templateCache.put("/fnf/gui/filecount/filecount.html","<b>{{ model.getSelectedSizeSumText() }}</b> / {{ model.getSizeSumText() }} &nbsp;in <b>{{ model.getSelectedFileCount() }}</b> / {{ model.getFileCount()}} Files, &nbsp;<b>{{ model.getSelectedFolderCount() }}</b> / {{ model.getFolderCount()}} Folders");
$templateCache.put("/fnf/gui/filterinput/filterinput.html","<div class=\"input-group text-xs-right\"><input class=\"form-control fnf-filter-input\" type=\"text\" placeholder=\"Filter\" ng-show=\"filterInputVisible\" ng-change=\"filterInputChanged()\" ng-model=\"quickFilterText\"> <span class=\"input-group-btn\"><button class=\"btn btn-link\" type=\"submit\" ng-click=\"onClicked()\" ng-dblclick=\"onDblClicked()\"><i class=\"fa fa-filter\"></i></button></span></div>");
$templateCache.put("/fnf/gui/folderbutton/folderbutton.html","<div class=\"btn-group\" role=\"group\"><button id=\"btnGroupDrop2\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" ng-bind=\"label\"></button><div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop2\"><a ng-repeat=\"disk in startingPoints\" class=\"dropdown-item\" href=\"#\" ng-click=\"onFolderChanged({folder:disk})\" ng-bind=\"disk\"></a></div></div>");
$templateCache.put("/fnf/gui/menuitem/menuitem.html","<a class=\"dropdown-item text-nowrap\" href=\"#\" ng-click=\"clickOn(id)\">{{label}} <span class=\"pull-right\" ng-bind-html=\"shortcut\"></span></a>");
$templateCache.put("/fnf/gui/pathlabel/pathlabel.html","<a ng-repeat-start=\"p in pathes track by $index\" class=\"btn btn-link btn-sm fnf-link-btn\" href=\"#\" ng-click=\"clickOnIndex($index)\" ng-class=\"{\'last\': $last}\" ng-show=\"p\" ng-bind=\"p\"></a><span class=\"fnf-path-sep\" ng-if=\"!$last\" ng-repeat-end>/</span>");}]);