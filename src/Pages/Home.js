import React from "react";
import NavBar from "../Components/NavBar";
import img from "../Images/home.jpg";

const Home = () => {
	return (
		<>
			<NavBar />
			<img src={img} alt="Home" style={{ maxWidth: "100%" }} />
		</>
	);
};

export default Home;
