import React, { useState } from "react";
import "../style/CustomRangeSlider.css"; // Import CSS for styling

function CustomRangeSlider() {
    const [value, setValue] = useState(50); // Initial value of the slider

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                className="slider"
            />
            <p className="slider-value">Value: {value}</p>
        </div>
    );
}

export default CustomRangeSlider;
