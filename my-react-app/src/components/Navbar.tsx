interface listRegionProps {
	region: string;
	id: number;
}

interface mapRegionProps {
	index: number;
	setIndex: (index: number) => void;
	regionList: listRegionProps[];
}

function Navbar({ regionList, index, setIndex }: mapRegionProps) {
	return (
		<nav className="nav">
			<img className="logo" src="./src/assets/logo.png" alt="Gégé Depardieu" />
			{regionList.map((listRegionProps) => (
				<button
					className="navlist"
					type="button"
					key={listRegionProps.region}
					onClick={() => setIndex(listRegionProps.id)}
				>
					{listRegionProps.region}
				</button>
			))}
		</nav>
	);
}

export default Navbar;
