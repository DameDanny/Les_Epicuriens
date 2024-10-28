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
}

function Vins({ Liste }: VinsListe) {
  return (
    <>
      <p> Hello vin </p>
      {Liste.map((VinDesc) => (
        <figure key={VinDesc.id}>
          <h2>{VinDesc.nom}</h2>
          <p>{VinDesc.category}</p>
          <p>{VinDesc.description}</p>
          <p>{VinDesc.appellation}</p>
          <img src={VinDesc.imageVin} alt={VinDesc.imageVin} />
        </figure>
      ))}
    </>
  );
}

export default Vins;
