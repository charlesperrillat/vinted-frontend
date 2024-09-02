import { Link } from "react-router-dom";
import vintedLogo from "../assets/images/vinted-logo.svg";
import heroBanner from "../assets/images/hero-banner.jpg";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img src={vintedLogo} alt={vintedLogo} />
        </Link>
        <input type="text" placeholder="Recherche des articles" />
        <div className="connexion">
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <button>Se connecter</button>
        </div>
        <button>Vends tes articles</button>
      </div>
      {/* <img src={heroBanner} alt="two women looking at clothes in a bedroom" /> */}
    </header>
  );
};

export default Header;
