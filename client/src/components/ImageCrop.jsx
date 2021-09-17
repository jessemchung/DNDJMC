import ReactDOM from 'react-dom';
import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Button from '@material-ui/core/Button';

class ImageCrop extends PureComponent {
  state = {
    done: false,
    name: "",
    src: null,
    crop: {
      unit: '%',
      width: 30,
      aspect: 1 / 1
    },
    file: null
  };


  onClicketh = (e) => {
    this.setState({ done: true });
    console.log('yay');

    //this will make an axios request

  };


  //! working here

  handleUpload = () => {
    // const storage = getStorage(firebaseApp);

    // Create a reference to 'mountains.jpg'
    const storageRef = ref(storage, this.state.name);


    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, this.state.file).then((snapshot) => {
      console.log(snapshot);
      console.log('Uploaded a blob or file!');
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });


    });


  };



  onSelectFile = (e) => {
    // console.log(e.target.files[0].name, 'this is the real name');
    this.setState({ name: e.target.files[0].name });

    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = (image) => {
    // console.log(this, 'is this the window');
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // console.log(crop, 'what is this');
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      // console.log(this.state, 'inside makeClientCrop')
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        this.state.name
      );
      // console.log(croppedImageUrl, 'AAAA');
      this.setState({ croppedImageUrl });
      // console.log(this.state, 'more to do');

    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error('Canvas is empty');
            return;
          }
          // console.log(this.state, 'need to change the blob');

          var file = new File([blob], this.state.name);
          // console.log(file, 'is this a file from the blob?');
          this.setState({ file: file })
          // console.log(this.state, 'file should be safe and sound');

          blob.name = fileName;
          window.URL.revokeObjectURL(this.fileUrl);
          this.fileUrl = window.URL.createObjectURL(blob);
          // console.log(blob, 'hello?')
          resolve(this.fileUrl);
        },
        'image/jpeg',
        1
      );
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    if (this.state.done===false) {
      return (
        <div className="Cropper">
          <div>
            <input type="file" accept="image/*" onChange={this.onSelectFile} />
          </div>
          {src && (
            <ReactCrop
              src={src}
              crop={crop}
              ruleOfThirds
              onImageLoaded={this.onImageLoaded}
              onComplete={this.onCropComplete}
              onChange={this.onCropChange}
            />
          )}
          {croppedImageUrl && (
            <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
          )}
        <Button variant="contained" color="primary" onClick={this.onClicketh}>Submit</Button>
        </div>
      );

    }

    if (this.state.done===true) {
      return (
        <div className="Cropper">
            <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />

        </div>
      );

    }

  }
}


export default ImageCrop;
