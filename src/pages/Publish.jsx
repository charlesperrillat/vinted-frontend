import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("0");
  const [exchange, setExchange] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("place", place);
      formData.append("price", price);
      formData.append("exchange", exchange);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("publish response ==>", response.data);
      navigate(`/offers/${response.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return token ? (
    <main className="main-publish">
      <div className="publish-container">
        <h1>Vends ton article</h1>
        <form onSubmit={handleSubmit}>
          <div className="publish-picture">
            <div className="publish-dashed">
              <input
                type="file"
                name="picture"
                id="publish-picture"
                onChange={(event) => {
                  setPicture(event.target.files[0]);
                }}
              />

              <label htmlFor="publish-picture">
                <span className="publish-picture-sign">+</span>
                <span>Ajoute une photo</span>
              </label>
              {picture && (
                <div className="publish-picture-preview">
                  <img src={URL.createObjectURL(picture)} alt="preview photo" />
                </div>
              )}
            </div>
          </div>
          <div className="publish-text">
            <div className="publish-field-item">
              <label>Titre</label>
              <input
                type="text"
                name="title"
                placeholder="ex: Chemise Sézane verte"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="publish-field-item">
              <label>Décris ton article</label>
              <textarea
                name="description"
                placeholder="ex: porté quelques fois, taille correctement"
                rows={5}
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="publish-text">
            <div className="publish-field-item">
              <label>Marque</label>
              <input
                type="text"
                name="brand"
                placeholder="ex: Zara"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div className="publish-field-item">
              <label>Size</label>
              <input
                type="text"
                name="size"
                placeholder="ex: L / 40 / 12"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div className="publish-field-item">
              <label>Couleur</label>
              <input
                type="text"
                name="color"
                placeholder="ex: Fushia"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div className="publish-field-item">
              <label>Etat</label>
              <input
                type="text"
                name="condition"
                placeholder="Neuf avec étiquette"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div className="publish-field-item">
              <label>Lieu</label>
              <input
                type="text"
                name="place"
                placeholder="ex: Paris"
                value={place}
                onChange={(event) => {
                  setPlace(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="publish-text">
            <div className="publish-field-item">
              <label>Prix</label>
              <input
                type="text"
                name="price"
                placeholder="0,00 €"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div className="publish-field-item">
              <label htmlFor="exchange"></label>
              <div className="exchange">
                <input
                  type="checkbox"
                  name="exchange"
                  id="exchange"
                  onChange={() => {
                    setExchange(!exchange);
                  }}
                />
                <span>Je suis intéressé(e) par les échanges</span>
              </div>
            </div>
          </div>
          <div className="publish-submit">
            <button type="submit">Ajouter</button>
          </div>
        </form>
      </div>
    </main>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default Publish;
