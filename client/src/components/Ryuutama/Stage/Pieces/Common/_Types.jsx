"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conditions = exports.ReadingTypes = exports.newForm = void 0;
var newForm = /** @class */ (function () {
    function newForm() {
        this.data = {
            name: '',
            hitpoints: 0,
            healthyImage: '',
            bloodyImage: '',
            initiative: 0,
            armor: 0,
            appearance: 'none',
            null: false,
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
var conditions;
(function (conditions) {
    conditions[conditions["poison"] = 1] = "poison";
    conditions[conditions["curse"] = 2] = "curse";
    conditions[conditions["prone"] = 3] = "prone";
    conditions[conditions["grappled"] = 4] = "grappled";
    conditions[conditions["flu"] = 5] = "flu";
    conditions[conditions["charm"] = 6] = "charm";
    conditions[conditions["frightened"] = 7] = "frightened";
    conditions[conditions["blinded"] = 8] = "blinded";
    conditions[conditions["petrified"] = 9] = "petrified";
})(conditions = exports.conditions || (exports.conditions = {}));
//# sourceMappingURL=_Types.jsx.map