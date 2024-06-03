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

	// const [imageSize, setImageSize] = useState("");
	// const [uploadedImage, setUploadedImage] = useState(addImage);
	// const [compressedImage, setCompressedImage] = useState(noImage);
	// const [imageData, setImageData] = useState("");
	const { status, selectedImage } = useSelector(selectImage);

	const [v, setV] = useState(null);
	const [originalSize, setOriginalSize] = useState(0);
	const [loading, setLoading] = useState(false);
	const [percent, setPercentage] = useState(1);
	const [CPSize, setCPSize] = useState(null);
	const [resultImg, setResultImg] = useState();
	const [imgPreview, setImgPreview] = useState(noImage);

	const dispatch = useDispatch();


	useEffect(() => {
		if (status.uploadStatus === "success") {
			toast.success("Image Saved Successfully");
		}

	}, [status.uploadStatus]);

	useEffect(() => {
		if (v !== null) {
			handleImageUpload(v);
		}
	}, [percent]);

	const setImageHandler = (e) => {
		const image = e.target.files[0];
		setV(image);
		handleImageUpload(image);
		const reader = new FileReader();

		reader.onload = function (e) {
			setImgPreview(e.target.result);
		};
		reader.readAsDataURL(image);
	};

	const handleImageUpload = async (imageFile) => {
		console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
		let originalSize = imageFile.size / 1024 / 1024;
		setOriginalSize(originalSize.toFixed(3));
		setLoading(true);

		const options = {
			maxSizeMB: (percent / 10).toFixed(1),

			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};
		try {
			const compressedFile = await imageCompression(imageFile, options);

			setLoading(false);

			console.log(
				`compressedFile size ${compressedFile.size / 1024 / 1024} MB`
			);
			setCPSize((compressedFile.size / 1024 / 1024).toFixed(3));


			const reader = new FileReader();

			reader.onload = function (e) {

				setResultImg(e.target.result);
				setImgPreview(e.target.result);
			};

			reader.readAsDataURL(compressedFile);
		} catch (error) {
			console.log(error);
		}
	};


	

	const handleSaveImage = () => {
		console.log(88989);
		dispatch(saveImage(resultImg));

	};

	return (
		<section className='compressPage'>
			<div className='backgroundStyle'></div>
			<div className='compressContainer'>
				<div className='beforeImage'>
					<img
						src={imgPreview}
						// style={
						// 	uploadedImage === addImage
						// 		? { width: "60px", height: "auto" }
						// 		: {}
						// }

						alt='Your Uploaded Image'
					/>
				</div>
				<img src={spiral} alt='spiral' className='spiralSvg' />
				<div className='afterImage'>

					{/* <img

						src={compressedImage}
						style={
							compressedImage === noImage
								? { width: "60px", height: "auto" }
								: {}
						}
						alt='Your Uploaded Image'
					/> */}

					{loading === true ? (
						<h2>Loading</h2>
					) : (
						<img className='compress-img' src={resultImg} alt='hi' />
					)}

				</div>
			</div>

			<div className='compressActions'>
				<input
					type='file'
					onChange={setImageHandler}

					id='imageUploadBtn'
					hidden
				/>
				<label htmlFor='imageUploadBtn' className='image_uploader'>
					Upload{" "}
				</label>

				<div className='rangeSlider'>
					<p>Value: {percent}%</p>
					<input
						type='range'
						min='1'
						max='100'
						value={percent}
						onChange={(e) => setPercentage(e.target.value)}
						className='sizeChanger'
					/>
					<p>original Size: {originalSize}mb</p>
					<p>compress Size: {CPSize}mb</p>
				</div>

				<div className='actions'>
					<a
						href={resultImg}
						download='compressed_image.jpg'
						className='btn-compress'
					>
						{/* <p>Download</p> */}
						<IoCloudDownloadSharp />
					</a>

					<button
						onClick={handleSaveImage}
						className='btn-compress'
						title='Upload'
					>
						{/* <p>Upload</p> */}
						<IoCloudUploadSharp />
					</button>


					{selectedImage?.url != undefined && (

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
