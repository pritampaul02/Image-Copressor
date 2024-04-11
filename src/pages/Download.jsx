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

const Download = () => {
    let uploadDate = "12/05/2023";
    let imageSize = "13kb";

    const [backImg, setBackImg] = useState(pic1);
    console.log(backImg);

    // useEffect(() => {}, [backImg]);

    return (
        <section>
            <div className="content">
                <div id="page_info">
                    <div id="your_img">Your Images</div>
                    {/* <div id="show_all">Show all...</div> */}
                </div>

                <div id="select_img_conte">
                    {/* <div id="before_img" class="select_img">
                        <img class="img_size" src={pic1} alt="pic1" />
                        <p class="bef_aft_txt">Before</p>
                    </div> */}
                    <div id="after_img" className="select_img">
                        <img className="img_size" src={backImg} alt="pic1" />
                        {/* <p class="bef_aft_txt">After</p> */}
                    </div>
                </div>

                <div className="desc_conte">
                    <div className="desc">
                        <p>Upload Date : {`${uploadDate}`}</p>
                        <p>Image Size : {`${imageSize}`}</p>
                    </div>

                    <div className="desc" id="download_shear_conte">
                        {/* <a href={`${backImg}`} download={true}> */}
                        <a
                            href={`${backImg}`}
                            download={true}
                            id="download-botton"
                            className="download-shear-botton"
                        >
                            Download
                            <HiDownload className="download_icon" />
                        </a>
                        {/* </a> */}
                        <div
                            id="shear-botton"
                            className="download-shear-botton"
                        >
                            Share
                            <IoIosShareAlt className="download_icon" />
                        </div>
                    </div>
                </div>

                <div
                    className="background"
                    style={{ backgroundImage: `url(${backImg})` }}
                ></div>
            </div>
            <div className="secend_content">
                <img src={pic1} alt="pic1" onClick={() => setBackImg(pic1)} />
                <img src={pic2} alt="pic2" onClick={() => setBackImg(pic2)} />
                <img src={pic5} alt="pic5" onClick={() => setBackImg(pic5)} />
                <img src={pic6} alt="pic6" onClick={() => setBackImg(pic6)} />
                <img src={pic4} alt="pic4" onClick={() => setBackImg(pic4)} />
                <img src={pic7} alt="pic7" onClick={() => setBackImg(pic7)} />
                <img src={pic3} alt="pic3" onClick={() => setBackImg(pic3)} />
                <img src={pic8} alt="pic8" onClick={() => setBackImg(pic8)} />
                <img
                    src={pic10}
                    alt="pic10"
                    onClick={() => setBackImg(pic10)}
                />
                <img src={pic9} alt="pic9" onClick={() => setBackImg(pic9)} />
                <img
                    src={pic12}
                    alt="pic12"
                    onClick={() => setBackImg(pic12)}
                />
                <img
                    src={pic11}
                    alt="pic11"
                    onClick={() => setBackImg(pic11)}
                />
                <img
                    src={pic13}
                    alt="pic13"
                    onClick={() => setBackImg(pic13)}
                />
            </div>
        </section>
    );
};

export default Download;
