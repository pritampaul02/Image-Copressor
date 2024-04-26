import React from "react";

import { Link } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";

import compress from "../media/compress.png";
import compress02 from "../media/ForHomepage/compress 02.png";
import feature1 from "../media/ForHomepage/features 01.jpg";
import feature2 from "../media/ForHomepage/features 02.jpg";
import feature3 from "../media/ForHomepage/features 03.jpg";
import feature4 from "../media/ForHomepage/features 04.jpg";


import "../style/Home.css";
import ImageUpload from "./ImageUpload";

const Home = () => {
    return (
        <section id="homepage">
            <div id="home-1st-content">
                <div id="homepage_heading_container">
                    <h1>
                        Now Compress Your Image Easlily with Save features for the
                        Future use
                    </h1>
                    <p>
                        Welcome to our platform where you can compress your images quickly and effortlessly. With our easy-to-use interface, you can reduce image sizes without compromising quality, saving valuable storage space. Additionally, take advantage of our convenient image upload feature to seamlessly transfer your files online. Start optimizing your images today !
                    </p>
                    <Link to="/compress" className="btn">
                        Get Started <MdKeyboardArrowRight className="iconStyle" />
                    </Link>
                </div>

                <div id="homepage_img_container">
                    <img src={compress02} alt="compress" />
                </div>

                {/* <ImageUpload /> */}


            </div> {/* 1st cont end */}



            <div id="home-2nd-content">
                <h1>Why Choose Us?</h1>
                <div id="home_features_container">
                    <div id="home_features_card">
                        <img id="home_features_img" src={feature1} />
                        <div id="home_features_card_dsc">
                            <h2>
                                Web storage
                            </h2>
                            <p>
                                We provide a Web storage feature to store your images on web, that's help you to save your local storage.
                            </p>
                        </div>

                    </div>
                    <div id="home_features_card">
                        <img id="home_features_img" src={feature2} />
                        <div id="home_features_card_dsc">
                            <h2>
                                Strong Data Security
                            </h2>
                            <p>
                                We provide a Web storage feature to store your images on web, that's help you to save your local storage.
                            </p>
                        </div>

                    </div>
                    <div id="home_features_card">
                        <img id="home_features_img" src={feature3} />
                        <div id="home_features_card_dsc">
                            <h2>
                                Instant Image Compression
                            </h2>
                            <p>
                                We provide a Web storage feature to store your images on web, that's help you to save your local storage.
                            </p>
                        </div>

                    </div>
                    <div id="home_features_card">
                        <img id="home_features_img" src={feature4} />
                        <div id="home_features_card_dsc">
                            <h2>
                                Preserve Image Quality
                            </h2>
                            <p>
                                We provide a Web storage feature to store your images on web, that's help you to save your local storage.
                            </p>
                        </div>

                    </div>
                </div>
            </div>  {/* 2nd cont end */}

            <div id="home_back">g</div>

        </section>
    );
};

export default Home;
