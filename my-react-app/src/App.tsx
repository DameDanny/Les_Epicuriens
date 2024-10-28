import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Regions from "./components/Regions";
import Vins from "./components/Vins";
import Liste_Vins from "./components/Liste_Vins";

const ListeRegion = [
	{ region: "Bourgogne", imageRegion: "./regions/bourgogne.jpg", id: 0 },
	{ region: "Bordeaux", imageRegion: "./regions/bordeaux.jpg", id: 1 },
	{ region: "Alsace", imageRegion: "./regions/alsace.jpg", id: 2 },
	{ region: "Valée du Rhône", imageRegion: "./regions/valee_rhone.jpg", id: 3 },
];

const ListeVins = [
	[{ nom: "", category: "", description: "", appellation: "" }],
];

function App() {
	const [index, setIndex] = useState(null);

	return (
		<>
			<nav>
				<Navbar />
				<Liste_Vins />
			</nav>
			<div>
				<Regions regionData={ListeRegion} />
				<Vins />
			</div>
		</>
	);
}

export default App;
