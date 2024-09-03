import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [id]);

  // const offers = data.offers;

  // console.log("offers ==>", offers);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main className="main-offer">
      <div className="offer-page">
        <div className="offer-picture">
          <img src={data.product_image.secure_url} alt={data.product_name} />
        </div>
        <div className="offer-info">
          <h2 className="offer-price">{data.product_price.toFixed(2)} €</h2>
          <div className="product-details">
            {data.product_details.map((detail) => {
              const keys = Object.keys(detail);
              const key = keys[0];
              return (
                <div className="product-detail">
                  <span>{Object.keys(detail)}</span>
                  <span>{detail[key]}</span>
                </div>
              );
            })}
          </div>
          <div className="line-break"></div>
          <div className="offer-description">
            <h3>{data.product_name}</h3>
            <p>{data.product_description}</p>
            <div className="offer-owner">
              <img
                src={data.owner.account.avatar.secure_url}
                alt="owner avatar"
              />
              <span>{data.owner.account.username}</span>
            </div>
          </div>
          <button>Acheter</button>
        </div>
      </div>
    </main>
  );
};

export default Offer;
