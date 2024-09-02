const Signup = () => {
  return (
    <main>
      <div className="signup-container">
        <h2>S'inscrire</h2>
        <form>
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />

          <div className="newsletter-container">
            <input type="checkbox" />
            <span>S'inscrire à notre newsletter</span>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
        <a href="#">Tu as déjà un compte ? Connecte-toi !</a>
      </div>
    </main>
  );
};

export default Signup;
