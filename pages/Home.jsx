import React from "react";

import { Link } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";

import compress from "../media/compress.png";

import "../style/Home.css";

const Home = () => {
    return (
        <section id="homePage">
            <div className="container">
                <h1>
                    Now Compress Your Image Easlily with Save features for the
                    Future use
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Saepe perferendis, pariatur minima expedita aliquam
                    consectetur mollitia deserunt eos voluptates nesciunt ut
                    odit reprehenderit et placeat consequatur, vel vero dolore
                    iusto adipisci voluptas, repellendus illum error officia
                    amet? Debitis dolorem amet voluptate eius praesentium quasi
                    facere!
                </p>
                <Link to="/compress" className="btn">
                    Get Started <MdKeyboardArrowRight className="iconStyle" />
                </Link>
            </div>
            <img src={compress} alt="compress" />
        </section>
    );
};

export default Home;
