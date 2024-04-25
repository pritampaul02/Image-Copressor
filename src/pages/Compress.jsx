import React, { useState } from "react";

import { IoIosShareAlt } from "react-icons/io";
import { IoCloudDownloadSharp, IoCloudUploadSharp } from "react-icons/io5";
import addImage from "../media/129-1298005_png-file-upload-image-icon-png.png";
import noImage from "../media/1174483.png";
import imageCompression from "browser-image-compression";

// import bird from "../media/pic1.jpg";
import spiral from "../media/spiral.svg";

import "../style/compress.css";

const Compress = () => {
    const [imageSize, setImageSize] = useState(50);
    const [uploadedImage, setUploadedImage] = useState(addImage);
    const [compressedImage, setCompressedImage] = useState(noImage);

    const [imageData, setImageData] = useState("");
    // const [imgPreview, setImgPreview] = useState('/vite.svg')

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
                setUploadedImage(e.target.result);
                console.log(e.target.result);
            };

            reader.readAsDataURL(compressedFile);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="compressPage">
            <div className="backgroundStyle"></div>
            <div className="compressContainer">
                <div className="beforeImage">
                    <img
                        src={uploadedImage}
                        style={
                            uploadedImage === addImage
                                ? { width: "60px", height: "auto" }
                                : {}
                        }
                        alt="Your Uploaded Image"
                    />
                </div>
                <img src={spiral} alt="spiral" className="spiralSvg" />
                <div className="afterImage">
                    <img
                        src={compressedImage}
                        style={
                            compressedImage === noImage
                                ? { width: "60px", height: "auto" }
                                : {}
                        }
                        alt="Your Uploaded Image"
                    />
                </div>
            </div>

            <div className="compressActions">
                <input
                    type="file"
                    multiple="false"
                    onChange={handleImageUpload}
                    id="imageUploadBtn"
                    hidden
                />
                <label htmlFor="imageUploadBtn" className="image_uploader">
                    Upload{" "}
                    <span>
                        {uploadedImage !== addImage ? ` ${uploadedImage}` : ""}
                    </span>
                </label>

                <div className="rangeSlider">
                    <p>min : 50kb</p>
                    <input
                        type="range"
                        min={10}
                        max={100}
                        value={imageSize}
                        onChange={(e) => setImageSize(e.target.value)}
                        className="sizeChanger"
                    />
                    <p>{imageSize}</p>
                </div>

                <div className="actions">
                    <a
                        href="/"
                        download={true}
                        className="btn-compress"
                        title="Download"
                    >
                        {/* <p>Download</p> */}
                        <IoCloudDownloadSharp />
                    </a>
                    <button
                        onClick={() => {
                            console.log("Image Uploaded");
                        }}
                        className="btn-compress"
                        title="Upload"
                    >
                        {/* <p>Upload</p> */}
                        <IoCloudUploadSharp />
                    </button>
                    <button
                        onClick={() => {
                            console.log("Image shared");
                        }}
                        className="btn-compress"
                        title="Share"
                    >
                        {/* <p>Share</p> */}
                        <IoIosShareAlt />
                    </button>
                    <button
                        type="submit"
                        className="btn-compress btnCompress-primary"
                    >
                        Compress
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Compress;
