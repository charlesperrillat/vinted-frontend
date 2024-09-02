import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profilePicture from "../assets/images/profile-picture.png";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  const offers = data.offers;
  // console.log("data ==>", data);
  // console.log("offers ==>", offers);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main className="main-home">
      {/* <Link to="/offers/:id">Offer</Link> */}
      {offers.map((offer) => {
        // console.log(offer);
        return (
          <article key={offer._id} className="item-for-sale">
            <div className="owner-info">
              {offer.owner.account.avatar ? (
                <img
                  src={offer.owner.account.avatar.secure_url}
                  alt="owner avatar"
                />
              ) : (
                <img src={profilePicture} alt="owner avatar" />
              )}
              <span>{offer.owner.account.username}</span>
            </div>
            <div className="item-image">
              <img src={offer.product_image.secure_url} alt="product image" />
            </div>
            <div className="item-details">
              <p>{offer.product_price.toFixed(2)} €</p>
              {offer.product_details.map((detail, index) => {
                if (Object.keys(detail)[0] === "TAILLE") {
                  return <span key={index}>{detail.TAILLE}</span>;
                }
              })}
              {/* <span>{offer.product_details[1].TAILLE}</span> */}
              <span>{offer.product_details[0].MARQUE}</span>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default Home;
