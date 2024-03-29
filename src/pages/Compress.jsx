import React, { useState } from "react";
import "../style/compress.css";

const Compress = () => {
    // const [first, setfirst] = useState(50);

    // let input = document.querySelector("input");
    // console.log(input.value);

    return (
        <div>
            <input
                type="range"
                className="rangeSlider"
                // value={first}
                // onChange={setfirst((e) => e.terget.value)}
            />

            <p></p>
        </div>
    );
};

export default Compress;
