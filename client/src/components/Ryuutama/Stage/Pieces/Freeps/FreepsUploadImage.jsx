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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = __importStar(require("react"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var FreepsUploadImage = function (props) {
    var _a = (0, react_1.useState)(""), selectImage = _a[0], setSelectImage = _a[1];
    // I need something to toggle 
    var _b = (0, react_1.useState)(null), image = _b[0], setImage = _b[1];
    var _c = (0, react_1.useState)({ x: 0, y: 0, width: 100, height: 100 }), cropArea = _c[0], setCropArea = _c[1];
    var _d = (0, react_1.useState)(false), isDragging = _d[0], setIsDragging = _d[1];
    var imgRef = React.useRef(null);
    var canvasRef = React.useRef(null);
    var submitImageUrl = function () {
        var imageDataUrl = canvasRef.current.toDataURL(); // This will give you the image string
        props.freepInfo.healthyImage = imageDataUrl;
        props.setFreepInfo(__assign({}, props.freepInfo));
        props.setOpen(false);
    };
    var closeImageDialog = function () {
        props.setOpen(false);
    };
    var handleImageUpload = function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                var imageDataUrl = reader_1.result;
                setImage(imageDataUrl); // Set the image data URL in state
                // Create a new image to get its dimensions
                var img = new Image();
                img.src = imageDataUrl;
            };
            reader_1.readAsDataURL(file);
        }
    };
    var handleMouseDown = function (e) {
        e.preventDefault(); // Prevent image dragging
        setIsDragging(true);
        var rect = e.currentTarget.getBoundingClientRect();
        var mouseX = e.clientX - rect.left;
        var mouseY = e.clientY - rect.top;
        setCropArea({
            x: mouseX,
            y: mouseY,
            width: 0,
            height: 0,
        });
    };
    var handleMouseMove = function (e) {
        if (isDragging) {
            e.preventDefault(); // Prevent image dragging
            var rect = e.currentTarget.getBoundingClientRect();
            var newWidth_1 = e.clientX - rect.left - cropArea.x;
            var newHeight_1 = e.clientY - rect.top - cropArea.y;
            setCropArea(function (prev) { return (__assign(__assign({}, prev), { width: newWidth_1 < 0 ? 0 : newWidth_1, height: newHeight_1 < 0 ? 0 : newHeight_1 })); });
        }
    };
    var handleMouseUp = function () {
        setIsDragging(false);
    };
    var handleCrop = function () {
        if (canvasRef.current && imgRef.current) {
            var ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); //width height and width are correct
                var img = imgRef.current;
                var originalWidth = img.naturalWidth;
                var originalHeight = img.naturalHeight;
                // Displayed image dimensions (from CSS or container size)
                var displayedRect = img.getBoundingClientRect();
                var displayedWidth = displayedRect.width;
                var displayedHeight = displayedRect.height;
                // Calculate scaling factors (-4 because of the two border length that is mucking things up)
                var scaleX = originalWidth / (displayedWidth - 4);
                var scaleY = originalHeight / displayedHeight;
                var croppedWidth = cropArea.width * scaleX;
                var croppedHeight = cropArea.height * scaleY;
                canvasRef.current.width = croppedWidth;
                canvasRef.current.height = croppedHeight;
                //how to get size of a given component?
                ctx.drawImage(imgRef.current, cropArea.x * scaleX, cropArea.y * scaleY, cropArea.width * scaleX, cropArea.height * scaleY, 0, 0, croppedWidth, croppedHeight);
            }
        }
    };
    return (<Dialog_1.default open={props.open} onClose={closeImageDialog}>
      <DialogTitle_1.default>Select Image</DialogTitle_1.default>
      <DialogContent_1.default>
        <DialogContentText_1.default>
          Upload an image and then crop.
        </DialogContentText_1.default>
        <div id="crop-zone">

          <div>
            <input type="file" accept="image/*" onChange={handleImageUpload}/>
            <button onClick={handleCrop}>Crop Image</button>

            {image && (<div style={{
                position: 'relative',
                display: 'inline-block',
                cursor: isDragging ? 'grabbing' : 'crosshair',
                overflow: 'hidden', // Hide parts of the image outside the container
            }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={function () { return setIsDragging(false); }}>
                <img draggable="false" src={image} alt="Source" ref={imgRef} style={{
                width: "100%",
                margin: '0 auto',
                position: 'relative', // Keeps it relative to the container
            }}/>
                <div style={{
                position: 'absolute',
                border: '2px dashed #000',
                left: cropArea.x,
                top: cropArea.y,
                width: cropArea.width,
                height: cropArea.height,
                pointerEvents: 'none',
            }}/>
              </div>)}
            <canvas ref={canvasRef} style={{ display: 'block', marginTop: '10px', width: "100%" }}/>
          </div>
        </div>
      </DialogContent_1.default>
      <DialogActions_1.default>
        <Button_1.default onClick={closeImageDialog}>Cancel</Button_1.default>
        <Button_1.default onClick={submitImageUrl}>Save</Button_1.default>
      </DialogActions_1.default>
    </Dialog_1.default>);
};
exports.default = FreepsUploadImage;
//# sourceMappingURL=FreepsUploadImage.jsx.map