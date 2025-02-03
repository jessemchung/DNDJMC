"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadJSON = exports.downloadJSON = exports.sortCreatureArray = void 0;
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
var downloadJSON = function (data, name) {
    var jsonContent = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    var link = document.createElement("a");
    link.setAttribute("href", jsonContent);
    link.setAttribute("download", "".concat(name, ".json"));
    document.body.appendChild(link);
    link.click();
};
exports.downloadJSON = downloadJSON;
function uploadJSON(item, callback) {
    console.log("uploading");
    var files = item;
    if (files && files.length > 0) {
        var file = files[0];
        // Check if the file is a CSV
        if (file.type === "application/json") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                try {
                    var text = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                    callback(JSON.parse(text));
                }
                catch (error) {
                    console.error("Failed to parse json");
                }
            };
            reader.readAsText(file); // Read file as text
        }
        else {
            console.error("Uploaded file is not a JSON");
        }
    }
}
exports.uploadJSON = uploadJSON;
//# sourceMappingURL=commonFunction.jsx.map