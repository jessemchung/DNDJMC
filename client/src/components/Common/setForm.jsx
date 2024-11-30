"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = void 0;
var react_1 = require("react");
var useForm = function (initialData) {
    var _a = (0, react_1.useState)(initialData), form = _a[0], setForm = _a[1];
    var updateForm = function (data) {
        setForm(function (prevForm) { return (__assign(__assign({}, prevForm), data)); });
    };
    return [form, updateForm];
};
exports.useForm = useForm;
//# sourceMappingURL=setForm.jsx.map