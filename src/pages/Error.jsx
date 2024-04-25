//import React from "react";

import "../style/error.css";

const Error = () => {
    return (
        <section classNmae="page_404">
            <div className="page_404-container">
                <p className="text-center "> 404 </p>
                <div className="four_zero_four"></div>

                <a href="/" className="link_404">
                    Go to Home
                </a>
            </div>
        </section>
    );
};

export default Error;
