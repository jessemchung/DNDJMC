import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Box, Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, Grid2, styled, Typography } from '@mui/material';
import CommonDialogue from "../Common/Components/CommonDialogue.jsx"
import {downloadJSON, uploadJSON} from "../Common/commonFunction.jsx"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// front text is an optional question
type flashcard = {
  frontText: string,
  backText: string,
  frontTitle: string,
  hint: string
}

const VisuallyHiddenInput = styled('input')({
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

const dummyData: Array<flashcard> = [
  {
    frontText: `
    This is the first paragraph. It has multiple sentences.
    The indentation is preserved because we are using template literals.

    This is the second paragraph. It also has proper indentation.
    You can include as many paragraphs as you need, and the formatting
    will remain intact.

    This is the third paragraph. Notice how the indentation is consistent
    across all paragraphs.
  `, frontTitle: "title", backText: `
    This is the back paragraph. It has multiple sentences.
    The indentation is preserved because we are using template literals.

    This is the second paragraph. It also has proper indentation.
    You can include as many paragraphs as you need, and the formatting
    will remain intact.

    This is the third paragraph. Notice how the indentation is consistent
    across all paragraphs.
  `,
  hint: `this is hint 1` },
  {
    frontText: `
    This is the first paragraph. It has multiple sentences.
    The indentation is preserved because we are using template literals.

    This is the second paragraph. It also has proper indentation.
    You can include as many paragraphs as you need, and the formatting
    will remain intact.

    This is the third paragraph. Notice how the indentation is consistent
    across all paragraphs.
  `, frontTitle: "card 2", backText: `

      second card
  `,
  hint: `this is hint2` }

]


export default function flashcard() {
  const [cardList, setCardList] = React.useState(dummyData);
  const [cardIndex, setCardIndex] = React.useState<number>(0);
  console.log(cardIndex, "this is the cardIndex")

  const [cardFront, setCardFront] = React.useState<boolean>(true);
  const [openDialogue, setOpenDialogue] = React.useState<boolean>(false);
  const [newCardForm, setNewCardForm] = React.useState<flashcard>({
    backText: "",
    frontText: "",
    frontTitle: "",
    hint: ""
  })


  const updateForm = (key: keyof flashcard, value: string) => {
    setNewCardForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };


  const handleDelete = () => {
    // setCardList((prevItems) => prevItems.filter((item, index) => index !== cardIndex));
    // // After deletion, move to the previous card or reset to 0 if the list is empty
    // setCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  function nextCard(success: boolean) {
    setCardIndex((cardIndex + 1) % cardList.length)
  }

  // needs to add as the new number will be from 0 to the cardList length
  function previousCard(success: boolean) {
    setCardIndex((cardIndex - 1 + cardList.length) % cardList.length)
  }

  const handleKeys = (event: KeyboardEvent) => {
    switch(event.key) {
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
        break
    }
  };

  const handleKeysUp = (event: KeyboardEvent) => {
    switch(event.key) {
      case ('Shift'):
        setCardFront(true);
        break
    }
  };



  React.useEffect(() => {
    window.addEventListener('keydown', handleKeys);
    window.addEventListener('keyup', handleKeysUp);

    return () => {
      window.removeEventListener('keydown', handleKeys);
      window.removeEventListener('keyup', handleKeysUp);

    };
  }, [cardIndex, cardList]); 

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(array: Array<flashcard>) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  function card(): React.ReactElement<any, 'div'> {

    if (cardFront) {
      return (<div>
        <CardContent>
          <Typography variant="h1" style={{"whiteSpace": "pre-line"}}>
            {cardList.length=== 0 ? "Nothing Yet" : cardList[cardIndex].frontTitle}
          </Typography>
          <Typography variant="body2" style={{"whiteSpace": "pre-line"}}>
            {cardList.length=== 0 ? "Nothing Yet" : cardList[cardIndex].frontText}
          </Typography>
        </CardContent>

      </div>)
    } else {
      return (
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {cardList.length=== 0 ? "Nothing Yet" : cardList[cardIndex].frontTitle}
          </Typography>
          <Typography variant="body2" style={{"whiteSpace": "pre-line"}}>
            {cardList.length=== 0 ? "Nothing Yet" : cardList[cardIndex].backText}
          </Typography>
        </CardContent>
      )
    }
  }

  function saveCard() {
    console.log(newCardForm);
    setCardList(cardList.concat([newCardForm]))
    setOpenDialogue(false);
  } 

  function deleteCards() {
    setCardIndex(0);
    setCardList([]);
  }

  function addCardDialogue() {
    if (openDialogue) {
      return (
        <CommonDialogue 
        open={openDialogue} 
        onClose={() => setOpenDialogue(false)} 
        buttons={[{ label: "Cancel",  onClick: ()=>{setOpenDialogue(false)}}, { label: "Save", onClick: saveCard  }]} 
        title={''}
        textFields={[
          {label: "front title", onChange: (event) => {updateForm('frontTitle', event.target.value)}, value: newCardForm.frontTitle, multiline: false},
          {label: "front text", onChange: (event) => {updateForm('frontText', event.target.value)}, value: newCardForm.frontText, multiline: true},
          {label: "back text", onChange: (event) => {updateForm('backText', event.target.value)}, value: newCardForm.backText, multiline: true},
          {label: "hint", onChange: (event) => {updateForm('hint', event.target.value)}, value: newCardForm.hint, multiline: true}

        ]} />
      )
    } else {
      return <></>
    }
  }

  return (
    <>
      {addCardDialogue()}
      <div id="flashcard-buttons" className="biggy">
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button onClick={() => {downloadJSON(cardList, "forsetti")}}>Save</Button>
          <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload JSON file
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => uploadJSON(event.target.files, setCardList)}
            multiple
          />
        </Button>          <Button onClick={deleteCards}>Clear</Button>
          <Button>Discard</Button>
          <Button onClick={() => {setOpenDialogue(true)}}>Add New Card</Button>
          <Button onClick={() => { shuffleArray(cardList) }}>Shuffle</Button>
          <Button onClick={() => { previousCard(true) }}>Previous</Button>
          <Button onClick={() => { nextCard(true) }}>Success</Button>
          <Button onClick={() => { nextCard(false) }}>Fail</Button>

        </ButtonGroup>
        <Grid2 container spacing={2}>

          <Grid2 size={2}>
            <div>hi8</div>
          </Grid2>
          <Grid2 size={8}>
            <CardActionArea onClick={() => { setCardFront(!cardFront) }}>
              <Card sx={{ minWidth: 275 }}>
                {card()}
                {/* <CardActions>
                  <Button size="small">Discard</Button>
                  <Button size="small">Edit</Button>
                </CardActions> */}
              </Card>
            </CardActionArea>
          </Grid2>
          <Grid2 size={2}>
            <div>hi4</div>
          </Grid2>
        </Grid2>
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
    </>
  );
}