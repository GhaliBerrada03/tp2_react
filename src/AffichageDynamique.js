import { useState } from 'react';

function AffichageDynamique() {
  const messages = ['Premier clic', 'Deuxième clic', 'Troisième clic'];
  const [index, setIndex] = useState(-1);

  const gererClic = () => {
    setIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div>
      <h2>Ex: Affichage dynamique</h2>
      <button onClick={gererClic}>Cliquer</button>
      <p>{index === -1 ? 'Aucun clic pour le moment' : messages[index]}</p>
    </div>
  );
}

export default AffichageDynamique;