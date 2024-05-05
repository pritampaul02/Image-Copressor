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
	const [image, setImage] = useState(null);
	const [range, setRange] = useState(100);
	const [maxRange, setMaxrange] = useState(100);
	const [minRange, setMinrange] = useState(1);

	const [imageSize, setImageSize] = useState("");
	const [uploadedImage, setUploadedImage] = useState(addImage);
	const [compressedImage, setCompressedImage] = useState(noImage);

	const [imageData, setImageData] = useState("");
	// const [imgPreview, setImgPreview] = useState('/vite.svg')
	const { status, selectedImage } = useSelector(selectImage);

	useEffect(() => {
		if (status.uploadStatus === "success") {
			toast.success("Image Saved Successfully");
		}

        console.log(selectedImage);
	}, [status.uploadStatus]);

	const dispatch = useDispatch();

	const handleImageUpload = async (event) => {
		const imageFile = event.target.files[0];
		setImage(imageFile);

		const options = {
			maxSizeMB: 0.1,
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

	function roundToThreeDecimalPlaces(num) {
		return Math.round(num * 1000) / 1000;
	}

	const handleImageDownload = () => {
		fetch(selectedImage?.url)
			.then((response) => response.blob())
			.then((blob) => {
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = selectedImage?.public_id;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			})
			.catch((error) => console.error("Error downloading image:", error));
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
					<span>{roundToThreeDecimalPlaces(imageSize)} MB</span>
				</label>

				<div className='rangeSlider'>
					{/* <p>min : {minRange}</p> */}
					{/* <p>min : {roundToThreeDecimalPlaces(imageSize)} MB</p> */}
					<input
						type='range'
						min={minRange}
						max={maxRange}
						value={range}
						onChange={(e) => setRange(e.target.value)}
						className='sizeChanger'
					/>
					<p>{range} %</p>
					{/* <p>{roundToThreeDecimalPlaces(imageSize)} MB</p> */}
				</div>

				<div className='actions'>
					{selectedImage && (
						<button
							onClick={handleImageDownload}
							download={true}
							className='btn-compress'
							title='Download'
						>
							{/* <p>Download</p> */}
							<IoCloudDownloadSharp />
						</button>
					)}
					<button
						onClick={handleSaveImage}
						className='btn-compress'
						title='Upload'
					>
						{/* <p>Upload</p> */}
						<IoCloudUploadSharp />
					</button>
					{selectedImage && (
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
					)}
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
