import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Regions from "./components/Regions";
import Vins from "./components/Vins";
import Liste_Vins from "./components/Liste_Vins";

const ListeRegion = [
  { region: "", imageRegion: "", id: 0 },
  { region: "", imageRegion: "", id: 1 },
  { region: "", imageRegion: "", id: 2 },
  { region: "", imageRegion: "", id: 3 },
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
  const [index, setIndex] = useState(null);

  return (
    <>
      <nav>
        <Navbar />
        <Liste_Vins />
      </nav>
      <div>
        <Regions />
        <Vins Liste={ListeVins[0]} />
      </div>
    </>
  );
}

export default App;
