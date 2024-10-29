interface Vins {
	id: number;
	nom: string;
	category: string;
	description: string;
	appellation: string;
	imageVin: string;
}

interface VinsListe {
	Liste: Vins[];
	nomRegion: string;
}

function Vins({ Liste, nomRegion }: VinsListe) {
	return (
		<>
			<h1>{nomRegion}</h1>
			<section className="vins-liste">
				{Liste.map((VinDesc) => (
					<figure key={VinDesc.id} className="vins">
						<h2>{VinDesc.nom}</h2>
						<p>{VinDesc.category}</p>
						<p>{VinDesc.description}</p>
						<p>{VinDesc.appellation}</p>
						<img src={VinDesc.imageVin} alt={VinDesc.imageVin} />
					</figure>
				))}
			</section>
		</>
	);
}

export default Vins;
