import React from "react";
import Image from "./Image";

const Card = ({title, desc= "Default description", img}) => {


	return (
		<div>
			<Image img={img} />
			<div>
				<h1>{title}</h1>
				<p>
                    {desc}
				</p>
			</div>
		</div>
	);
};

export default Card;
