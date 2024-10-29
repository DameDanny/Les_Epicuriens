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
	{
		region: "Valée du Rhône",
		imageRegion: "./src/assets/valee_rhone.jpg",
		id: 3,
	},
];

const ListeVins = [
	[
		{
			nom: "Clos de Vougeot",
			category: "Vin Rouge Grand Cru",
			description: "Bourgogne Grand Cru",
			appellation: "Côte de Nuits",
			imageVin: "",
		},
		{
			nom: "Grands Echézeaux",
			category: "Vin Rouge Grand Cru",
			description: "Bourgogne Grand Cru",
			appellation: "Côte de Nuits",
			imageVin: "",
		},
		{
			nom: "Romanée Conti",
			category: "Vin Rouge Grand Cru",
			description: "Bourgogne Grand Cru",
			appellation: "Côte de Nuits",
			imageVin: "",
		},
		{
			nom: "Corton Charlemagne",
			category: "Vin Rouge Grand Cru",
			description: "Bourgogne Grand Cru",
			appellation: "Côte de Nuits",
			imageVin: "",
		},
	],
	[
		{
			nom: "Château LAFITE-ROTHSCHILD",
			category: "Vin Rouge",
			description: "",
			appellation: "Bourgogne",
			imageVin: "",
		},
		{
			nom: "",
			category: "Vin Rouge",
			description: "",
			appellation: "Bourgogne",
			imageVin: "",
		},
		{
			nom: "",
			category: "Vin Rouge",
			description: "",
			appellation: "Bourgogne",
			imageVin: "",
		},
		{
			nom: "",
			category: "Vin Rouge",
			description: "",
			appellation: "Bourgogne",
			imageVin: "",
		},
	],
	[
		{
			nom: "",
			category: "Vin Rouge",
			description: "",
			appellation: "Bourgogne",
			imageVin: "",
		},
		{
			nom: "",
			category: "Vin Rouge",
			description: "",
			appellation: "Bourgogne",
			imageVin: "",
		},
		{
			nom: "",
			category: "Vin Rouge",
			description: "",
			appellation: "Bourgogne",
			imageVin: "",
		},
		{
			nom: "",
			category: "Vin Rouge",
			description: "",
			appellation: "Bourgogne",
			imageVin: "",
		},
	],
	[
		{
			nom: "",
			category: "Vin Rouge",
			description: "",
			appellation: "Bourgogne",
			imageVin: "",
		},
	],
];

function App() {
	const [index, setIndex] = useState(-1);

	

	return (
		<>
			<nav>
				<Navbar regionList={ListeRegion} index={index} setIndex={setIndex} />
				<Liste_Vins  />
			</nav>
			<div>
				{index === -1 ? (
					<Regions regionData={ListeRegion} index={index} setIndex={setIndex} />
				) : (
					<Vins Liste={ListeVins[index]} />
				)}
			</div>
		</>
	);
}

export default App;
// {ListeVins[index]}
