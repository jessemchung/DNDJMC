"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionsOptions = exports.colorFreeps = exports.conditions = exports.ReadingTypes = exports.newForm = void 0;
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
{ /* Electric Blue (#007AFF) – Bold and energetic, great for a standout player.
    Fiery Red (#FF3B30) – A strong, attention-grabbing color perfect for a competitive player.
    Sunflower Yellow (#FFCC00) – Bright and cheerful, ideal for a positive or cheerful player.
    Emerald Green (#34C759) – A fresh, lively green that symbolizes growth and vitality.
    Vivid Purple (#AF52DE) – A rich, playful color for a unique player.
    Tangerine Orange (#FF9500) – Warm and energetic, ideal for someone who's quick or dynamic. */
}
var colorFreeps;
(function (colorFreeps) {
    colorFreeps["Blue"] = "Blue";
    colorFreeps["Red"] = "Red";
    colorFreeps["Yellow"] = "Yellow";
    colorFreeps["Green"] = "Green";
    colorFreeps["Purple"] = "Purple";
    colorFreeps["Orange"] = "Orange";
})(colorFreeps = exports.colorFreeps || (exports.colorFreeps = {}));
var positionsOptions;
(function (positionsOptions) {
    positionsOptions[positionsOptions["Front 1"] = 0] = "Front 1";
    positionsOptions[positionsOptions["Front 2"] = 1] = "Front 2";
    positionsOptions[positionsOptions["Front 3"] = 2] = "Front 3";
    positionsOptions[positionsOptions["Front 4"] = 3] = "Front 4";
    positionsOptions[positionsOptions["Front 5"] = 4] = "Front 5";
    positionsOptions[positionsOptions["Back 1"] = 5] = "Back 1";
    positionsOptions[positionsOptions["Back 2"] = 6] = "Back 2";
    positionsOptions[positionsOptions["Back 3"] = 7] = "Back 3";
    positionsOptions[positionsOptions["Back 4"] = 8] = "Back 4";
    positionsOptions[positionsOptions["Back 5"] = 9] = "Back 5";
})(positionsOptions = exports.positionsOptions || (exports.positionsOptions = {}));
//# sourceMappingURL=_Types.jsx.map