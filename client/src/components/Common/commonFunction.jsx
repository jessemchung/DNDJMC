"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCreatureArray = void 0;
// sorts
var sortCreatureArray = function (unsortedArray) {
    var sortedArray = unsortedArray.sort(function (a, b) {
        if (a.initiative > b.initiative) {
            return 1;
        }
        else {
            return 0;
        }
    });
    return sortedArray;
};
exports.sortCreatureArray = sortCreatureArray;
//# sourceMappingURL=commonFunction.jsx.map