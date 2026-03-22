import { useState } from 'react';

function FormulaireInscription() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const gererSoumission = (e) => {
    e.preventDefault();
    alert(`Prénom : ${prenom}\nEmail : ${email}`);
  };

  return (
    <div>
      <h2>Ex2 : Formulaire d'inscription</h2>
      <form onSubmit={gererSoumission}>
        <div>
          <label>Prénom : </label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>

        <div>
          <label>Email : </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default FormulaireInscription;