import { Link } from "react-router-dom";
import vintedLogo from "../assets/images/vinted-logo.svg";

const Header = ({ token, handleToken, search, setSearch }) => {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img src={vintedLogo} alt={vintedLogo} />
        </Link>
        <input
          type="text"
          placeholder="Recherche des articles"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        {token ? (
          <div className="disconnection">
            <button
              onClick={() => {
                handleToken(null);
              }}
            >
              Se déconnecter
            </button>
          </div>
        ) : (
          <div className="connexion">
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
        )}

        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
