import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let data = [
		{ title: "Image 1", description: "Hermosa imagen random 1", image: "https://picsum.photos/500/325?random=1" },
		{ title: "Image 2", description: "Hermosa imagen random 2", image: "https://picsum.photos/500/325?random=2" },
		{ title: "Image 3", description: "Hermosa imagen random 3", image: "https://picsum.photos/500/325?random=3" },
		{ title: "Image 4", description: "Hermosa imagen random 4", image: "https://picsum.photos/500/325?random=4" }

	]
	return (
		<div className="body">
			<Navbar />
			<Jumbotron />

			<div className="container d-flex justify-content-between  py-5 text-center px-0">
				<div className="row ">
					{data.map((value, index) => {
						return <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center py-4 ">
							<Card key={index} title={value.title} description={value.description} image={value.image} />
						</div>
					})}
				</div>


			</div>
			<Footer />
		</div>

	);
};

export default Home;
