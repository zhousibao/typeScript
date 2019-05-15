"use strict";
exports.__esModule = true;
var export_1 = /** @class */ (function () {
    function export_1() {
    }
    export_1.prototype.isAcceptable = function (s) {
        return s.length === 5 && parseInt(s).toString() === s;
    };
    return export_1;
}());
exports.export_1 = export_1;
exports.export_2 = /^[0-9]+$/;
