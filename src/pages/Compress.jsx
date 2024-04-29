import React, { useEffect, useState } from "react";

import { IoIosShareAlt } from "react-icons/io";
import { IoCloudDownloadSharp, IoCloudUploadSharp } from "react-icons/io5";
import addImage from "../media/129-1298005_png-file-upload-image-icon-png.png";
import noImage from "../media/1174483.png";
import imageCompression from "browser-image-compression";

// import bird from "../media/pic1.jpg";
import spiral from "../media/spiral.svg";

import "../style/compress.css";
import { useDispatch, useSelector } from "react-redux";
import { saveImage, selectImage } from "../redux/slices/imageSlice";
import toast from "react-hot-toast";

const Compress = () => {
	const [imageSize, setImageSize] = useState("");
	const [uploadedImage, setUploadedImage] = useState(addImage);
	const [compressedImage, setCompressedImage] = useState("");

	const [imageData, setImageData] = useState("");
	// const [imgPreview, setImgPreview] = useState('/vite.svg')
	const { status, selectedImage } = useSelector(selectImage);

	useEffect(() => {
		if (status.uploadStatus === "success") {
			toast.success("Image Saved Successfully");
		}
	}, [status.uploadStatus]);

	const dispatch = useDispatch();

	const handleImageUpload = async (event) => {
		const imageFile = event.target.files[0];

		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};
		try {
			const compressedFile = await imageCompression(imageFile, options);
			console.log(
				`compressedFile size ${compressedFile.size / 1024 / 1024} MB`
			); // smaller than maxSizeMB
			setImageSize(compressedFile.size / 1024 / 1024);

			const reader = new FileReader();

			reader.onload = function (e) {
				// Set the result of the FileReader to the state variable
				setImageData(e.target.result);
				setUploadedImage(e.target.result);
				setCompressedImage(e.target.result);
				console.log(e.target.result);
			};

			reader.readAsDataURL(compressedFile);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSaveImage = () => {
		console.log(88989);
		dispatch(saveImage(compressedImage));
	};

	return (
		<section className='compressPage'>
			<div className='backgroundStyle'></div>
			<div className='compressContainer'>
				<div className='beforeImage'>
					<img
						src={uploadedImage}
						style={
							uploadedImage === addImage
								? { width: "60px", height: "auto" }
								: {}
						}
						alt='Your Uploaded Image'
					/>
				</div>
				<img src={spiral} alt='spiral' className='spiralSvg' />
				<div className='afterImage'>
					<img
						src={compressedImage}
						style={
							compressedImage === noImage
								? { width: "60px", height: "auto" }
								: {}
						}
						alt='Your Uploaded Image'
					/>
				</div>
			</div>

			<div className='compressActions'>
				<input
					type='file'
					onChange={handleImageUpload}
					id='imageUploadBtn'
					hidden
				/>
				<label htmlFor='imageUploadBtn' className='image_uploader'>
					Upload{" "}
					{/* <span>{uploadedImage !== addImage ? ` ${uploadedImage}` : ""}</span> */}
                    <span>{imageSize}MB</span>
				</label>

				<div className='rangeSlider'>
					<p>min : 50kb</p>
					<input
						type='range'
						min={10}
						max={100}
						value={imageSize}
						onChange={(e) => setImageSize(e.target.value)}
						className='sizeChanger'
					/>
					<p>{imageSize}</p>
				</div>

				<div className='actions'>
					<button
						href='/'
						download={true}
						className='btn-compress'
						title='Download'
					>
						{/* <p>Download</p> */}
						<IoCloudDownloadSharp />
					</button>
					<button
						onClick={handleSaveImage}
						className='btn-compress'
						title='Upload'
					>
						{/* <p>Upload</p> */}
						<IoCloudUploadSharp />
					</button>
					<button
						onClick={() => {
							selectedImage &&
								navigator.clipboard.writeText(selectedImage?.url).then(() => {
									toast.success("Url copied");
								});
						}}
						className='btn-compress'
						title='Share'
					>
						{/* <p>Share</p> */}
						<IoIosShareAlt />
					</button>
					{/* <button
                        type="submit"
                        className="btn-compress btnCompress-primary"
                    >
                        Compress
                    </button> */}
				</div>
			</div>
		</section>
	);
};

export default Compress;
