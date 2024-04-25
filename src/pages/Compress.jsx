import React, { useState } from "react";

import { IoIosShareAlt } from "react-icons/io";
import { IoCloudDownloadSharp, IoCloudUploadSharp } from "react-icons/io5";
import addImage from "../media/129-1298005_png-file-upload-image-icon-png.png";
import noImage from "../media/1174483.png";

// import bird from "../media/pic1.jpg";
import spiral from "../media/spiral.svg";

import "../style/compress.css";

const Compress = () => {
    const [imageSize, setImageSize] = useState(50);
    const [uploadedImage, setUploadedImage] = useState(addImage);
    const [compressedImage, setCompressedImage] = useState(noImage);

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
                    <a href="/" className="btn-compress" title="Upload">
                        {/* <p>Upload</p> */}
                        <IoCloudUploadSharp />
                    </a>
                    <a href="/" className="btn-compress" title="Share">
                        {/* <p>Share</p> */}
                        <IoIosShareAlt />
                    </a>
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
