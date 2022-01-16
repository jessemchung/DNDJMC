"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingTypes = exports.newForm = void 0;
var newForm = /** @class */ (function () {
    function newForm() {
        this.data = {
            name: '',
            hitpoints: 0,
            healthyImage: '',
            bloodyImage: '',
            initiative: 0,
            armor: 0,
            appearance: 'none'
        };
    }
    return newForm;
}());
exports.newForm = newForm;
;
var ReadingTypes;
(function (ReadingTypes) {
    ReadingTypes["Some"] = "some";
    ReadingTypes["Variants"] = "variants";
    ReadingTypes["Of"] = "of";
    ReadingTypes["Strings"] = "strings";
})(ReadingTypes = exports.ReadingTypes || (exports.ReadingTypes = {}));
//# sourceMappingURL=_Types.jsx.map