import React, { useEffect, useState } from "react";

import { HiDownload } from "react-icons/hi";
import { IoIosShareAlt } from "react-icons/io";

import pic1 from "../media/pic1.jpg";
import pic2 from "../media/pic2.jpg";
import pic3 from "../media/pic3.jpg";
import pic4 from "../media/pic4.jpg";
import pic5 from "../media/pic5.jpg";
import pic6 from "../media/pic6.jpg";
import pic7 from "../media/pic7.jpg";
import pic8 from "../media/pic8.jpg";
import pic9 from "../media/pic9.jpg";
import pic10 from "../media/pic10.jpg";
import pic11 from "../media/pic11.jpg";
import pic12 from "../media/pic12.jpg";
import pic13 from "../media/pic13.jpg";

import "../style/Download.css";
import { useDispatch, useSelector } from "react-redux";
import { getallImages, selectImage } from "../redux/slices/imageSlice";

const Download = () => {
	let imageSize = "13kb";

	const [backImg, setBackImg] = useState(pic1);
	const [filename, setFilename] = useState("");
	const [currentImage, setCurrentImage] = useState(null);
	console.log(backImg);

	// useEffect(() => {}, [backImg]);
	const dispatch = useDispatch();

	const { allImages } = useSelector(selectImage);
	useEffect(() => {
		dispatch(getallImages());
	}, []);

	const handleImageDownload = () => {
		fetch(backImg)
			.then((response) => response.blob())
			.then((blob) => {
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = filename;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			})
			.catch((error) => console.error("Error downloading image:", error));
	};

	const setCurrentImageHandler = (image) => {
		setBackImg(image.url);
		setFilename(image.public_id);

        const date = new Date(image.createdAt);
        const options = { year: 'numeric', month: 'long', day: '2-digit' };
		setCurrentImage(date.toLocaleDateString('en-US', options));
	};

	return (
		<section>
			<div className='content'>
				<div id='page_info'>
					<div id='your_img'>Your Images</div>
					{/* <div id="show_all">Show all...</div> */}
				</div>

				<div id='select_img_conte'>
					{/* <div id="before_img" class="select_img">
                        <img class="img_size" src={pic1} alt="pic1" />
                        <p class="bef_aft_txt">Before</p>
                    </div> */}
					<div id='after_img' className='select_img'>
						<img className='img_size' src={backImg} alt='pic1' />
						{/* <p class="bef_aft_txt">After</p> */}
					</div>
				</div>

				<div className='desc_conte'>
					<div className='desc'>
						<p>Upload Date : {`${currentImage}`}</p>
						<p>Image Size : {`${imageSize}`}</p>
					</div>

					<div className='desc' id='download_shear_conte'>
						{/* <a href={`${backImg}`} download={true}> */}
						<a
							onClick={handleImageDownload}
							id='download-botton'
							className='download-shear-botton'
						>
							Download
							<HiDownload className='download_icon' />
						</a>
						{/* </a> */}
						<div id='shear-botton' className='download-shear-botton'>
							Share
							<IoIosShareAlt className='download_icon' />
						</div>
					</div>
				</div>

				<div
					className='background'
					style={{ backgroundImage: `url(${backImg})` }}
				></div>
			</div>
			<div className='secend_content'>
				{allImages &&
					allImages.map((image) => (
						<img
							src={image.url}
							alt={image.public_id}
							onClick={() => setCurrentImageHandler(image)}
						/>
					))}

				{/* <img src={pic1} alt='pic1' onClick={() => setBackImg(pic1)} /> */}
			</div>
		</section>
	);
};

export default Download;
