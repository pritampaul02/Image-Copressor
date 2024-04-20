import React, { useState } from 'react'
import imageCompression from "browser-image-compression";

const ImageUpload = () => {

    const [imageData, setImageData] = useState('')
    const [imgPreview, setImgPreview] = useState('/vite.svg')

    const handleImageUpload = async (event) => {
		const imageFile = event.target.files[0];

		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};
		try {
			const compressedFile = await imageCompression(imageFile, options);

			const reader = new FileReader();

			reader.onload = function (e) {
				// Set the result of the FileReader to the state variable
				setImageData(e.target.result);
				setImgPreview(e.target.result);
                console.log(e.target.result);
			};

			reader.readAsDataURL(compressedFile);
		} catch (error) {
			console.log(error);
		}
	};



  return (
    <div>
        <input type="file" multiple onChange={handleImageUpload} />
        {
            imageData ? <img src={imageData} alt="" /> : <img src={imgPreview} alt="" />
        }
    </div>
  )
}

export default ImageUpload