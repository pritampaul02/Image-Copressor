import React, { useState } from "react";

import car from "../media/car.png";
import bird from "../media/bird.png";
import boat from "../media/boat.png";
import cars from "../media/cars.png";
import river from "../media/river.png";
import nature from "../media/natuer.png";
import redcar from "../media/redcar.png";
import cottage from "../media/cottage.png";
import blackcar from "../media/blackcar.png";
import mountain from "../media/mountain.png";
import tajmohol from "../media/tajmohol.png";
import tajsmoon from "../media/tajsmoon.png";
import whitecar from "../media/whitecar.png";
import kingfisher from "../media/kingfisher.png";
import raceingcar from "../media/raceingcar.png";
import kingfishers from "../media/kingfishers.png";

import "../style/compress.css";

const Compress = () => {
    // const [first, setfirst] = useState(50);

    // let input = document.querySelector("input");
    // console.log(input.value);

    return (
        <>
            <div className="com_container">
                <div className="compress-container">
                    <div className="com_process">
                        <img src={bird} alt="bird" />
                    </div>
                    <div className="com_process">
                        <img src={bird} alt="bird" />
                    </div>
                </div>
                <input
                    type="range"
                    className="rangeSlider"
                    // value={first}
                    // onChange={setfirst((e) => e.terget.value)}
                />
                <button> Compress image </button>
                <div className="background-img"></div>
            </div>

            {/* <div className="imagesContainer">
                <div className="box_body">
                    <p id="your_image">Your images</p>
                    <p id="show_all"> show all...</p>
                </div>

                <div className="second_content">
                    <img src={blackcar} />
                    <img src={boat} />
                    <img src={kingfisher} />
                    <img src={car} />
                    <img src={cars} />
                    <img src={cottage} />
                    <img src={mountain} />
                    <img src={nature} />
                    <img src={kingfishers} />
                    <img src={raceingcar} />
                    <img src={redcar} />
                    <img src={tajsmoon} />
                    <img src={river} />
                    <img src={tajmohol} />
                    <img src={whitecar} />
                </div>
            </div> */}
            {/* <div className="box_img">
                <div className="image">
                    <img src={blackcar} />
                    <img src={boat} />
                    <img src={kingfisher} />
                    <img src={car} />
                    <img src={cars} />
                    <img src={cottage} />
                    <img src={mountain} />
                    <img src={nature} />
                    <img src={kingfishers} />
                    <img src={raceingcar} />
                    <img src={redcar} />
                    <img src={tajsmoon} />
                    <img src={river} />
                    <img src={tajmohol} />
                    <img src={whitecar} />
                </div>
            </div> */}
        </>
    );
};

export default Compress;
