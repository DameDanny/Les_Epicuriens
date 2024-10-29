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
      imageVin: "./src/assets/vins_Clos Vougeot.jpg",
    },
    {
      nom: "Grands Echézeaux",
      category: "Vin Rouge Grand Cru",
      description: "Bourgogne Grand Cru",
      appellation: "Côte de Nuits",
      imageVin: "./src/assets/vins_Grand Echezeaux.jpg",
    },
    {
      nom: "Romanée Conti",
      category: "Vin Rouge Grand Cru",
      description: "Bourgogne Grand Cru",
      appellation: "Côte de Nuits",
      imageVin: "./src/assets/vins_Romanee Conti.jpg",
    },
    {
      nom: "Corton Charlemagne",
      category: "Vin Rouge Grand Cru",
      description: "Bourgogne Grand Cru",
      appellation: "Côte de Nuits",
      imageVin: "./src/assets/vins_Corton Charlemagne.jpg",
    },
  ],
  [
    {
      nom: "Château LAFITE-ROTHSCHILD",
      category: "Vin Rouge",
      description: "Bordeaux PREMIERS CRUS",
      appellation: "Pauillac",
      imageVin: "./src/assets/vins_Château LAFITE-ROTHSCHILD.jpg",
    },
    {
      nom: "Château MARGAUX",
      category: "Vin Rouge",
      description: "Bordeaux PREMIERS CRUS",
      appellation: "Margaux",
      imageVin: "./src/assets/vins_Château MARGAUX.jpg",
    },
    {
      nom: "Château HAUT-BRION",
      category: "Vin Rouge",
      description: "Bordeaux PREMIERS CRUS",
      appellation: "Pessac",
      imageVin: "./src/assets/vins_Château HAUT-BRION.jpg",
    },
    {
      nom: "Château LÉOVILLE LAS CASES",
      category: "Vin Rouge",
      description: "Bordeaux DEUXIEME CRUS",
      appellation: "Saint-Julien",
      imageVin: "./src/assets/vins_Château LÉOVILLE LAS CASES.jpg",
    },
  ],
  [
    {
      nom: "Alsace - gewurztraminer Hubert Beck",
      category: "Vin Blanc liquoreux",
      description: "Alsace grand Hubert Beck- gewurztraminer",
      appellation: "Gewurztraminer",
      imageVin: "./src/assets/vins_Gewurtraminer Hubert Bech.gif",
    },
    {
      nom: "Sylvaner - Joseph et Christian Binner",
      category: "Vin Blanc ",
      description: "Alsace - vieilles vignes de sylvaner",
      appellation: "Sylvaner",
      imageVin:
        "./src/assets/vins_Joseph et Christian Binner - Cuvée  S  1998.gif",
    },
    {
      nom: "Pinot Blanc Domaine Weinbach - Pinot Blanc Réserve 2009",
      category: "Vin Blanc",
      description: "Alsace - 100% pinot blanc - Clos des Capucins",
      appellation: "Pinot Blanc",
      imageVin: "./src/assets/vins_Domaine Weinbach.gif",
    },
    {
      nom: "Pinot Noir Ernest Burn - Clos St Imer 2003",
      category: "Vin Rouge",
      description: "Alsace- pinot noir",
      appellation: "Pinot noir",
      imageVin: "./src/assets/vins_Ernest Burn - Clos St Imer 2003.jpg",
    },
  ],
  [
    {
      nom: "Côte Rôtie Domaine Vernay Gisele ",
      category: "Vin Rouge",
      description:
        "Côte Rôtie Domaine Vernay Gisele et Colombier Sébastien 2022",
      appellation: "Cote Rotie",
      imageVin: "./src/assets/vins_domaine-daniel-roland-et-gisele-vernay.png",
    },

    {
      nom: "Cuvée du Vatican",
      category: "Vin Rouge",
      description: "Cuvée du Vatican - Châteauneuf du pape 2020",
      appellation: "Châteauneuf du pape",
      imageVin: "./src/assets/vins_chateau-sixtine-cuvee-du-vatican.png",
    },

    {
      nom: "Domaine Vincent Paris",
      category: "Vin Rouge",
      description: "Domaine Vincent Paris Saint Joseph Les Côtes 2021",
      appellation: "Saint Joseph",
      imageVin: "./src/assets/vins_domaine-vincent-paris.png",
    },

    {
      nom: "La Combe de Malleval 2021",
      category: "Vin Rouge",
      description: "Condrieu Stephane Ogier - La Combe de Malleval 2021",
      appellation: "Condrieu",
      imageVin: "./src/assets/vins_stephane-ogier-condrieu.png",
    },
  ],
];

function App() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <nav>
        <Navbar regionList={ListeRegion} index={index} setIndex={setIndex} />
        <Liste_Vins />
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
