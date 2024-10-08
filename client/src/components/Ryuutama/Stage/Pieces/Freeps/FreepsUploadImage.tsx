import { useState } from 'react';
import * as React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FreepsCardData } from '../Common/_Types.jsx'


interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}


//goal IOCE
//input is the form that needs to be edited.  For now.  Also give selection to select some generic icons.
// we need the ability to build an image
interface Props {
  // Define any props that the component should accept here
  freepInfo: FreepsCardData;
  title: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean;
  edit?: boolean;
  setFreepInfo: React.Dispatch<React.SetStateAction<FreepsCardData>>;
}



const FreepsUploadImage: React.FC<Props> = (props) => {
  const [selectImage, setSelectImage] = useState<string>("");

  // I need something to toggle 
  const [image, setImage] = useState<string | null>(null);
  const [cropArea, setCropArea] = useState<CropArea>({ x: 0, y: 0, width: 100, height: 100 });
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  const submitImageUrl = () => {
    const imageDataUrl = canvasRef.current.toDataURL(); // This will give you the image string
    props.freepInfo.healthyImage = imageDataUrl;
    props.setFreepInfo({ ...props.freepInfo });
    props.setOpen(false);

  }

  const closeImageDialog = () => {
    props.setOpen(false)
  }


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setImage(imageDataUrl); // Set the image data URL in state
  
        // Create a new image to get its dimensions
        const img = new Image();
        img.src = imageDataUrl;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent image dragging
    setIsDragging(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setCropArea({
      x: mouseX,
      y: mouseY,
      width: 0,
      height: 0,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      e.preventDefault(); // Prevent image dragging

      const rect = e.currentTarget.getBoundingClientRect();
      const newWidth = e.clientX - rect.left - cropArea.x;
      const newHeight = e.clientY - rect.top - cropArea.y;

      setCropArea((prev) => ({
        ...prev,
        width: newWidth < 0 ? 0 : newWidth,
        height: newHeight < 0 ? 0 : newHeight,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCrop = () => {
    if (canvasRef.current && imgRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);        //width height and width are correct
        const img = imgRef.current;
        const originalWidth = img.naturalWidth;
        const originalHeight = img.naturalHeight;
    
        // Displayed image dimensions (from CSS or container size)
        const displayedRect = img.getBoundingClientRect();
        const displayedWidth = displayedRect.width;
        const displayedHeight = displayedRect.height;
    
        // Calculate scaling factors (-4 because of the two border length that is mucking things up)
        const scaleX =  originalWidth/(displayedWidth-4);
        const scaleY = originalHeight/displayedHeight;

  
        const croppedWidth = cropArea.width * scaleX;
        const croppedHeight = cropArea.height * scaleY;

        canvasRef.current.width = croppedWidth;
        canvasRef.current.height = croppedHeight;

        //how to get size of a given component?
        ctx.drawImage(
          imgRef.current,
          cropArea.x * scaleX,
          cropArea.y * scaleY,
          cropArea.width * scaleX,
          cropArea.height * scaleY,
          0,
          0,
          croppedWidth,
          croppedHeight
        );
      }
    }
  };

  return (

    <Dialog open={props.open} onClose={closeImageDialog}>
      <DialogTitle>Select Image</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Upload an image and then crop.
        </DialogContentText>
        <div id="crop-zone">

          <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <button onClick={handleCrop}>Crop Image</button>

            {image && (
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  cursor: isDragging ? 'grabbing' : 'crosshair',
                  overflow: 'hidden', // Hide parts of the image outside the container
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={() => setIsDragging(false)}
              >
                <img draggable="false" src={image} alt="Source" ref={imgRef} 
                style={{ 
                  width: "100%",  // Ensure the image fits inside the container, we need to recalculate the values
                  margin: '0 auto',  // Center horizontally
                  position: 'relative',  // Keeps it relative to the container
                }} />
                <div
                  style={{
                    position: 'absolute',
                    border: '2px dashed #000',
                    left: cropArea.x,
                    top: cropArea.y,
                    width: cropArea.width,
                    height: cropArea.height,
                    pointerEvents: 'none',
                  }}
                />
              </div>
            )}
            <canvas ref={canvasRef} style={{ display: 'block', marginTop: '10px', width:"100%" }} />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeImageDialog}>Cancel</Button>
        <Button onClick={submitImageUrl}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FreepsUploadImage;