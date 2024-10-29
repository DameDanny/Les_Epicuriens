interface RegionProps {
	imageRegion: string;
	region: string;
	id: number;
}
interface RegionListe {
	regionData: RegionProps[];
	index: number;
	setIndex: (index: number) => void;
}

function Regions({ regionData, index, setIndex }: RegionListe) {
	return (
		<>
			<figure>
				{regionData.map((RegionProps) => (
					<div key={RegionProps.id}>
						{/* Note à moi même : on place toujours la clé directement après la map */}
						<button type="button" onClick={() => setIndex(RegionProps.id)}>
							<img
								src={RegionProps.imageRegion}
								alt={RegionProps.imageRegion}
							/>
							<h2>{RegionProps.region}</h2>
						</button>
					</div>
				))}
			</figure>
		</>
	);
}

export default Regions;
