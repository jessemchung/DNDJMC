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
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var CommonDialogue_jsx_1 = __importDefault(require("../Common/Components/CommonDialogue.jsx"));
var commonFunction_jsx_1 = require("../Common/commonFunction.jsx");
var CloudUpload_1 = __importDefault(require("@mui/icons-material/CloudUpload"));
var VisuallyHiddenInput = (0, material_1.styled)('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
var dummyData = [
    {
        frontText: "\n    This is the first paragraph. It has multiple sentences.\n    The indentation is preserved because we are using template literals.\n\n    This is the second paragraph. It also has proper indentation.\n    You can include as many paragraphs as you need, and the formatting\n    will remain intact.\n\n    This is the third paragraph. Notice how the indentation is consistent\n    across all paragraphs.\n  ", frontTitle: "title", backText: "\n    This is the back paragraph. It has multiple sentences.\n    The indentation is preserved because we are using template literals.\n\n    This is the second paragraph. It also has proper indentation.\n    You can include as many paragraphs as you need, and the formatting\n    will remain intact.\n\n    This is the third paragraph. Notice how the indentation is consistent\n    across all paragraphs.\n  ",
        hint: "this is hint 1"
    },
    {
        frontText: "\n    This is the first paragraph. It has multiple sentences.\n    The indentation is preserved because we are using template literals.\n\n    This is the second paragraph. It also has proper indentation.\n    You can include as many paragraphs as you need, and the formatting\n    will remain intact.\n\n    This is the third paragraph. Notice how the indentation is consistent\n    across all paragraphs.\n  ", frontTitle: "card 2", backText: "\n\n      second card\n  ",
        hint: "this is hint2"
    }
];
function flashcard() {
    var _a = React.useState(dummyData), cardList = _a[0], setCardList = _a[1];
    var _b = React.useState(0), cardIndex = _b[0], setCardIndex = _b[1];
    console.log(cardIndex, "this is the cardIndex");
    var _c = React.useState(true), cardFront = _c[0], setCardFront = _c[1];
    var _d = React.useState(false), openDialogue = _d[0], setOpenDialogue = _d[1];
    var _e = React.useState(false), editing = _e[0], setEditing = _e[1];
    var _f = React.useState({
        backText: "",
        frontText: "",
        frontTitle: "",
        hint: ""
    }), newCardForm = _f[0], setNewCardForm = _f[1];
    var updateForm = function (key, value) {
        setNewCardForm(function (prevForm) {
            var _a;
            return (__assign(__assign({}, prevForm), (_a = {}, _a[key] = value, _a)));
        });
    };
    var handleDelete = function () {
        // setCardList((prevItems) => prevItems.filter((item, index) => index !== cardIndex));
        // // After deletion, move to the previous card or reset to 0 if the list is empty
        // setCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };
    function nextCard(success) {
        setCardIndex((cardIndex + 1) % cardList.length);
    }
    // needs to add as the new number will be from 0 to the cardList length
    function previousCard(success) {
        setCardIndex((cardIndex - 1 + cardList.length) % cardList.length);
    }
    var handleKeys = function (event) {
        switch (event.key) {
            case ('Delete'):
                handleDelete();
                break;
            case ('Backspace'):
                handleDelete();
                break;
            case ('ArrowRight'):
                nextCard(true);
                break;
            case ('ArrowLeft'):
                previousCard(true);
                break;
            case ('Shift'):
                setCardFront(false);
                break;
        }
    };
    var handleKeysUp = function (event) {
        switch (event.key) {
            case ('Shift'):
                setCardFront(true);
                break;
        }
    };
    React.useEffect(function () {
        if (openDialogue === false) {
            window.addEventListener('keydown', handleKeys);
            window.addEventListener('keyup', handleKeysUp);
        }
        else {
            window.removeEventListener('keydown', handleKeys);
            window.removeEventListener('keyup', handleKeysUp);
        }
        return function () {
            window.removeEventListener('keydown', handleKeys);
            window.removeEventListener('keyup', handleKeysUp);
        };
    }, [cardIndex, cardList, openDialogue]);
    React.useEffect(function () {
        if (editing === true) {
            setNewCardForm(cardList[cardIndex]);
        }
    }, [editing]);
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    function shuffleArray(arrayToShuffle) {
        for (var i = arrayToShuffle.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arrayToShuffle[i];
            arrayToShuffle[i] = arrayToShuffle[j];
            arrayToShuffle[j] = temp;
        }
        setCardList(JSON.parse(JSON.stringify(arrayToShuffle)));
    }
    function card() {
        if (cardFront) {
            return (<div>
        <material_1.CardContent>
          <material_1.Typography variant="h1" style={{ "whiteSpace": "pre-line" }}>
            {cardList.length === 0 ? "Nothing Yet" : cardList[cardIndex].frontTitle}
          </material_1.Typography>
          <material_1.Typography variant="body2" style={{ "whiteSpace": "pre-line" }}>
            {cardList.length === 0 ? "Nothing Yet" : cardList[cardIndex].frontText}
          </material_1.Typography>
        </material_1.CardContent>

      </div>);
        }
        else {
            return (<material_1.CardContent>
          <material_1.Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {cardList.length === 0 ? "Nothing Yet" : cardList[cardIndex].frontTitle}
          </material_1.Typography>
          <material_1.Typography variant="body2" style={{ "whiteSpace": "pre-line" }}>
            {cardList.length === 0 ? "Nothing Yet" : cardList[cardIndex].backText}
          </material_1.Typography>
        </material_1.CardContent>);
        }
    }
    function saveCard() {
        if (editing === true) {
            setCardList(cardList.map(function (item, index) {
                if (index === cardIndex) {
                    return newCardForm;
                }
                else {
                    return item;
                }
            }));
            setEditing(false);
        }
        else {
            setCardList(cardList.concat([newCardForm]));
        }
        setOpenDialogue(false);
    }
    function deleteCards() {
        setCardIndex(0);
        setCardList([]);
    }
    function addCardDialogue() {
        if (openDialogue) {
            return (<CommonDialogue_jsx_1.default open={openDialogue} onClose={function () { return setOpenDialogue(false); }} buttons={[{ label: "Cancel", onClick: function () { setOpenDialogue(false); } }, { label: "Save", onClick: saveCard }]} title={''} textFields={[
                    { label: "front title", onChange: function (event) { updateForm('frontTitle', event.target.value); }, value: newCardForm.frontTitle, multiline: false },
                    { label: "front text", onChange: function (event) { updateForm('frontText', event.target.value); }, value: newCardForm.frontText, multiline: true },
                    { label: "back text", onChange: function (event) { updateForm('backText', event.target.value); }, value: newCardForm.backText, multiline: true },
                    { label: "hint", onChange: function (event) { updateForm('hint', event.target.value); }, value: newCardForm.hint, multiline: true }
                ]}/>);
        }
        else {
            return <></>;
        }
    }
    return (<>
      {addCardDialogue()}
      <div id="flashcard-buttons" className="biggy">
        <material_1.ButtonGroup variant="contained" aria-label="Basic button group">
          <material_1.Button onClick={function () { (0, commonFunction_jsx_1.downloadJSON)(cardList, "forsetti"); }}>Save</material_1.Button>
          <material_1.Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload_1.default />}>
          Upload JSON file
          <VisuallyHiddenInput type="file" onChange={function (event) { return (0, commonFunction_jsx_1.uploadJSON)(event.target.files, setCardList); }} multiple/>
        </material_1.Button>          <material_1.Button onClick={deleteCards}>Clear</material_1.Button>
          <material_1.Button>Discard</material_1.Button>
          <material_1.Button onClick={function () { console.log('hello'); setOpenDialogue(true); setEditing(true); }}>Edit</material_1.Button>

          <material_1.Button onClick={function () { setOpenDialogue(true); setEditing(false); }}>Add New Card</material_1.Button>
          <material_1.Button onClick={function () { shuffleArray(cardList); }}>Shuffle</material_1.Button>
          <material_1.Button onClick={function () { previousCard(true); }}>Previous</material_1.Button>
          <material_1.Button onClick={function () { nextCard(true); }}>Success</material_1.Button>
          <material_1.Button onClick={function () { nextCard(false); }}>Fail</material_1.Button>

        </material_1.ButtonGroup>
        <material_1.Grid2 container spacing={2}>

          <material_1.Grid2 size={2}>
            <div>hi8</div>
          </material_1.Grid2>
          <material_1.Grid2 size={8}>
            <material_1.CardActionArea onClick={function () { setCardFront(!cardFront); }}>
              <material_1.Card sx={{ minWidth: 275 }}>
                {card()}
              </material_1.Card>
            </material_1.CardActionArea>
          </material_1.Grid2>
          <material_1.Grid2 size={2}>
            <div>hi4</div>
          </material_1.Grid2>
        </material_1.Grid2>
      </div>

      <div id="Awesome" className="anim750">

        <div className="reveal circle_wrapper">
          <div className="circle">{cardList.length === 0 ? "No Hint" : cardList[cardIndex].hint}</div>
        </div>

        <div className="sticky anim750">
          <div className="front circle_wrapper anim750">
            <div className="circle anim750"></div>
          </div>
        </div>

        <h4>Want a hint?</h4>

        <div className="sticky anim750">
          <div className="back circle_wrapper anim750">
            <div className="circle anim750"></div>
          </div>
        </div>

      </div>
    </>);
}
exports.default = flashcard;
//# sourceMappingURL=flashcard.jsx.map