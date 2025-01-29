"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MENU_HEIGHT = exports.MENU_WIDTH = void 0;
function convertRemToPixels(remValue) {
    return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
exports.MENU_WIDTH = convertRemToPixels(20);
exports.MENU_HEIGHT = convertRemToPixels(20);
//# sourceMappingURL=HexMapCommon.jsx.map