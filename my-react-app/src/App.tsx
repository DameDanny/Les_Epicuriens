import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Regions from "./components/Regions";
import Vins from "./components/Vins";
import Liste_Vins from "./components/Liste_Vins";

const ListeRegion = [
	{ region: "Bourgogne", imageRegion: "", id: 0 },
	{ region: "Bordeaux", imageRegion: "", id: 1 },
	{ region: "Alsace", imageRegion: "", id: 2 },
	{ region: "Vallée du Rhône", imageRegion: "", id: 3 },
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
			<div>{index === null ? <Regions /> : <Vins />}</div>
		</>
	);
}

export default App;
// {ListeVins[index]}
