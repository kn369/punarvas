import React, { Fragment } from "react";
import NavBar from "../Components/NavBar";
import data from "../data/about";
import Card from "../Components/Card";
import { getByDisplayValue } from "@testing-library/react";

const AboutUs = () => {
	return (
		<div>
			<NavBar />
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					padding: "20px",
			}}>
				{data.map((item) => {
					return (
						<Fragment key={item.id}>
							<Card {...item} />
						</Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default AboutUs;
