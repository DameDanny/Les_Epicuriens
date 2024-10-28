interface RegionProps {
	imageRegion: string;
	region: string;
	id: number;
}
interface RegionListe {
	regionData: RegionProps[];
}

function Regions({ regionData }: RegionListe) {
	return (
		<>
			<figure>
				{regionData.map((article) => (
					<div key={article.id}>
						<img src={article.imageRegion} alt={article.imageRegion} />
						<h2>{article.region}</h2>
					</div>
				))}
			</figure>
		</>
	);
}

export default Regions;
