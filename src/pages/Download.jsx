import { HiDownload } from "react-icons/hi";
import { IoIosShareAlt } from "react-icons/io";

import React from 'react'
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
import "../style/Download.css"

const Download = () => {
    return (
        <section>

            <div class="content">

                <div id="page_info">
                    <div id="your_img">Your Images</div>
                    <div id="show_all">Show all...</div>
                </div>

                <div id="select_img_conte">
                    <div id="before_img" class="select_img">
                        <img class="img_size" src={pic1} alt="pic1" />
                        <p class="bef_aft_txt">Before</p>
                    </div>
                    <div id="after_img" class="select_img">
                        <img class="img_size" src={pic1} alt="pic1" />
                        <p class="bef_aft_txt">After</p>
                    </div>
                </div>

                <div class="desc_conte">

                    <div class="desc">
                        <p>Upload Date : 12/10/2023</p>
                        Image Size : 10mb - 50kb
                    </div>

                    <div class="desc" id="download_shear_conte">
                        <div id="download-botton" class="download-shear-botton">
                            Download<HiDownload className="download_icon"/>
                        </div>
                        <div id="shear-botton" class="download-shear-botton">
                            Share<IoIosShareAlt className="download_icon"/>
                        </div>
                    </div>

                </div>

                <div class="background"></div>

                
            </div>
            <div class='secend_content'>
            
                <img src={pic2} alt="pic2" />
                <img src={pic5} alt="pic5" />
                <img src={pic6} alt="pic6" />
                <img src={pic4} alt="pic4" />
                <img src={pic7} alt="pic7" />
                <img src={pic3} alt="pic3" />
                <img src={pic8} alt="pic8" />
                <img src={pic10} alt="pic10" />
                <img src={pic9} alt="pic9" />
                <img src={pic12} alt="pic12" />
                <img src={pic11} alt="pic11" />
                <img src={pic13} alt="pic13" />
            </div>

        </section>
    )
}

export default Download