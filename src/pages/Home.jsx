import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";

import compress from "../media/compress.png";
import compress02 from "../media/ForHomepage/compress 02.png";
import feature1 from "../media/ForHomepage/features 01.jpg";
import feature2 from "../media/ForHomepage/features 02.jpg";
import feature3 from "../media/ForHomepage/features 03.jpg";
import feature4 from "../media/ForHomepage/features 04.jpg";

import "../style/Home.css";
import ImageUpload from "./ImageUpload";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";

const Home = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector(selectUser);

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate("/");
    //     } else {
    //         navigate("/compress");
    //     }
    // }, [isAuthenticated]);

    return (
        <section id="homepage">
            <div id="home-1st-content">
                <div id="homepage_heading_container">
                    <h1 id="homepage_heading_container_h1">
                        Instantly Reduce Image Size and Save Images Directly to Web Storage
                        {/* Now Compress Your Image Easlily with Save features for
                        the Future use */}
                    </h1>
                    <h1 id="homepage_heading_container_h1_for_mob">
                        Instantly Compress Image Size and Save on Web
                    </h1>
                    <p id="homepage_heading_container_P">
                        Welcome to our platform where you can compress your
                        images quickly and effortlessly. With our easy-to-use
                        interface, you can reduce image sizes without
                        compromising quality, saving valuable storage space.
                        Additionally, take advantage of our convenient image
                        upload feature to seamlessly transfer your files online.
                        Start optimizing your images today !
                    </p>
                    <p id="homepage_heading_container_P_for_tab">Welcome to our platform where you can compress your images quickly and effortlessly. With our easy-to-use interface, you can reduce image sizes without compromising quality, saving valuable storage space.</p>
                    <p id="homepage_heading_container_P_for_mob">
                        {/* Welcome to our platform where you can compress your images quickly and effortlessly. */}
                        {/* Thank you for using our website to compress your images without losing quality. We appreciate your trust in us ! ❤️ */}
                        Optimize your images by compressing their size and securely storing them in web storage. Thank you for entrusting us with your valuable content ! ❤️
                    </p>
                    <Link to="/compress" className="btn">
                        Get Started{" "}
                        <MdKeyboardArrowRight className="iconStyle" />
                    </Link>
                    <div id="homepage_img_container_for_mob">
                        <img id="homepage_img_container_img_for_mob" src={compress02} alt="compress" />
                    </div>
                </div>

                <div id="homepage_img_container">
                    <img id="homepage_img_container_img" src={compress02} alt="compress" />
                </div>

                {/* <ImageUpload /> */}
            </div>{" "}
            {/* 1st cont end */}
            <div id="home-2nd-content">
                <h1>Why Choose Us?</h1>
                <div id="home_features_container">
                    <div id="home_features_card">
                        <img id="home_features_img" src={feature1} />
                        <div id="home_features_card_dsc">
                            <h2>Web storage</h2>
                            <p>
                                We provide a Web storage feature to store your
                                images on web, that's help you to save your
                                local storage.
                            </p>
                        </div>
                    </div>
                    <div id="home_features_card">
                        <img id="home_features_img" src={feature2} />
                        <div id="home_features_card_dsc">
                            <h2>Strong Data Security</h2>
                            <p>
                                Safeguard your images with advanced encryption protocols, ensuring privacy and confidentiality.
                            </p>
                        </div>
                    </div>
                    <div id="home_features_card">
                        <img id="home_features_img" src={feature3} />
                        <div id="home_features_card_dsc">
                            <h2>Instant Image Compression</h2>
                            <p>
                                Efficiently compress images, preserving quality, saving valuable time.
                            </p>
                        </div>
                    </div>
                    <div id="home_features_card">
                        <img id="home_features_img" src={feature4} />
                        <div id="home_features_card_dsc">
                            <h2>Preserve Image Quality</h2>
                            <p>
                                Optimize image compression to preserve professional-grade clarity and detail for superior visuals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>{" "}
            {/* 2nd cont end */}
            <div id="home_back">g</div>
        </section>

        // <section id='homePage'>
        // 	<div className='container'>
        // 		<h1>
        // 			Now Compress Your Image Easlily with Save features for the Future use
        // 		</h1>
        // 		<p>
        // 			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
        // 			perferendis, pariatur minima expedita aliquam consectetur mollitia
        // 			deserunt eos voluptates nesciunt ut odit reprehenderit et placeat
        // 			consequatur, vel vero dolore iusto adipisci voluptas, repellendus
        // 			illum error officia amet? Debitis dolorem amet voluptate eius
        // 			praesentium quasi facere!
        // 		</p>
        // 		<Link to='/compress' className='btn'>
        // 			Get Started <MdKeyboardArrowRight className='iconStyle' />
        // 		</Link>

        // 		{/* <ImageUpload /> */}
        // 	</div>
        // 	<img src={compress} alt='compress' />
        // </section>
    );
};

export default Home;
