import React, { useState } from "react";

import bird from "../media/pic1.jpg";
import spiral from "../media/spiral.svg";

import "../style/compress.css";
import { HiDownload } from "react-icons/hi";

const Compress = () => {
    const [imageSize, setImageSize] = useState(50);

    return (
        <section className="compressPage">
            <div className="backgroundStyle"></div>
            <div className="compressContainer">
                <div className="beforeImage">
                    <img src={bird} alt="Your Uploaded Image" />
                </div>
                <img src={spiral} alt="spiral" className="spiralSvg" />
                <div className="afterImage">
                    <img src={bird} alt="compressed Image" />
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
                    <a href="/" download={true} className="btn">
                        Download
                        <HiDownload className="download_icon" />
                    </a>
                    <a href="/" className="btn">
                        Upload
                        <HiDownload className="download_icon" />
                    </a>
                    <a href="/" className="btn">
                        Share
                    </a>
                    <button type="submit" className="btn">
                        Compress
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Compress;
