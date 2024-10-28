import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Regions from "./components/Regions";
import Vins from "./components/Vins";
import Liste_Vins from "./components/Liste_Vins";

const ListeRegion = [
	{ region: "Bourgogne", imageRegion: "./src/assets/bourgogne.jpg", id: 0 },
	{ region: "Bordeaux", imageRegion: "./src/assets/bordeaux.jpg", id: 1 },
	{ region: "Alsace", imageRegion: "./src/assets/alsace.jpg", id: 2 },
	{ region: "Valée du Rhône", imageRegion: "./src/assets/valee_rhone.jpg", id: 3 },
];

const ListeVins = [
	[{ nom: "", category: "", description: "", appellation: "" }],
];

function App() {
	const [index, setIndex] = useState(null);

	return (
		<>
			<nav>
				<Navbar regionList={ListeRegion} />
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
