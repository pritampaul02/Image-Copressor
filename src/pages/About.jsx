import React from "react";
import "../style/About.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

import profile1 from "../media/ForAboutPage/profile1.jpg";
import profile2 from "../media/ForAboutPage/profile2.jpg";
import profile3 from "../media/ForAboutPage/profile3.jpg";
import profile4 from "../media/ForAboutPage/profile4.jpg";

const About = () => {
    return (
        <div>
            <div id="first_container">
                <div id="slides_container">
                    <div id="slide">
                        <div id="thanks">
                            Thank you for choosing us. We appreciate your
                            support !
                        </div>
                        <p>
                            Your experience is highly valued by us, and we would
                            greatly appreciate your feedback through a star
                            rating. Your input helps us improve and serve you
                            better. If you enjoyed your time here, please
                            consider sharing our website with others to help
                            them discover the value we offer. Your support means
                            the world to us. Thank you for being a part of our
                            community !
                        </p>
                        <Link to="/compress" className="btn">
                            Rat Us{" "}
                            <MdKeyboardArrowRight className="iconStyle" />
                        </Link>
                    </div>
                </div>

                <div id="background"></div>
            </div>

            <div id="second_container">
                <h1>Our team</h1>
                <div id="team_container">
                    <div id="team_card">
                        <center>
                            <img id="profile" src={profile1} />
                        </center>
                        <div id="name_container">
                            <p id="name">SUSANTA SAMANTA</p>
                            <hr></hr>
                            <p id="post">
                                Software And Webdeveloper, Graphic Designer,
                                Photo Video editor
                            </p>
                            <p id="bio">
                                Hello my name is Susanta Samanta. I am from
                                Kolkata. I have 1 complete full stack
                                development experience. I have a basic
                                photo,video editing skill. And also i have some
                                drawing skills like portrait drawing, digital
                                painting. I finish my graduation on BCA form
                                Panskura Banamali college in West Bengal. My
                                programming skills are C, C++, Java, Python,
                                Javascript, Css, Html etc.
                            </p>
                            <p id="contact">
                                <i className="fa-brands fa-google"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-square-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </p>
                        </div>
                    </div>
                    <div id="team_card">
                        <center>
                            <img id="profile" src={profile2} />
                        </center>
                        <div id="name_container">
                            <p id="name">SUSANTA SAMANTA</p>
                            <hr></hr>
                            <p id="post">
                                Software And Webdeveloper, Graphic Designer,
                                Photo Video editor
                            </p>
                            <p id="bio">
                                Hello my name is susanta Samanta. I am from
                                Kolkata. I have 1 complete full stack
                                development experience. I have a basic
                                photo,video editing skill. And also i have some
                                drawing skills like portrait drawing, digital
                                painting. I finish my graduation on BCA form
                                Panskura Banamali college in West Bengal. My
                                programming skills are C, C++, Java, Python,
                                Javascript, Css, Html etc.
                            </p>
                            <p id="contact">
                                <i className="fa-brands fa-google"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-square-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </p>
                        </div>
                    </div>
                    <div id="team_card">
                        <center>
                            <img id="profile" src={profile3} />
                        </center>
                        <div id="name_container">
                            <p id="name">SUSANTA SAMANTA</p>
                            <hr></hr>
                            <p id="post">
                                Software And Webdeveloper, Graphic Designer,
                                Photo Video editor
                            </p>
                            <p id="bio">
                                Hello my name is susanta Samanta. I am from
                                Kolkata. I have 1 complete full stack
                                development experience. I have a basic
                                photo,video editing skill. And also i have some
                                drawing skills like portrait drawing, digital
                                painting. I finish my graduation on BCA form
                                Panskura Banamali college in West Bengal. My
                                programming skills are C, C++, Java, Python,
                                Javascript, Css, Html etc.
                            </p>
                            <p id="contact">
                                <i className="fa-brands fa-google"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-square-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </p>
                        </div>
                    </div>
                    <div id="team_card">
                        <center>
                            <img id="profile" src={profile4} />
                        </center>
                        <div id="name_container">
                            <p id="name">SUSANTA SAMANTA</p>
                            <hr></hr>
                            <p id="post">
                                Software And Webdeveloper, Graphic Designer,
                                Photo Video editor
                            </p>
                            <p id="bio">
                                Hello my name is susanta Samanta. I am from
                                Kolkata. I have 1 complete full stack
                                development experience. I have a basic
                                photo,video editing skill. And also i have some
                                drawing skills like portrait drawing, digital
                                painting. I finish my graduation on BCA form
                                Panskura Banamali college in West Bengal. My
                                programming skills are C, C++, Java, Python,
                                Javascript, Css, Html etc.
                            </p>
                            <p id="contact">
                                <i className="fa-brands fa-google"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-square-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="third_container">
                <h1>Contact Us</h1>
                <div id="contact_link_container">
                    <div id="logo_container">G</div>
                    <div id="logo_container">W</div>
                    <div id="logo_container">X</div>
                    <div id="logo_container">F</div>
                    <div id="logo_container">I</div>
                    <div id="logo_container">in</div>
                </div>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Security Policy</p>
                <p>Cookie Policy</p>
                <div id="background_2"></div>
                <div id="background_3"></div>
            </div>
        </div>
    );
};

export default About;
