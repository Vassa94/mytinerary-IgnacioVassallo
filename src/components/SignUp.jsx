import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../actions/authActions";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [photo, setPhoto] = useState("");
  const [pais, setPais] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        dispatch(signUp({ email, password, nombre, apellido, photo, pais })).then(() => {
            navigate("/");
        });
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card-signUp">
        <div className="bg-signUp">
          <h2>Registration</h2>
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="form-input">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Name:</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Surname:</label>
              <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Photo:</label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>País:</label>
              <select
                name="pais"
                value={pais}
                onChange={(e) => {
                  console.log("Valor seleccionado:", e.target.value);
                  setPais(e.target.value);
                }}
              >
                <option value="Argentina">Argentina</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Chile">Chile</option>
                <option value="Brasil">Brasil</option>
                <option value="Colombia">Colombia</option>
                <option value="Perú">Perú</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Ecuador">Ecuador</option>
                <option value="United States">United States</option>
                <option value="England">England</option>
                <option value="Spain">Spain</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>
            <button type="submit">Registrarse</button>
          </form>
        </div>
        <div className="blob-signUp"></div>
      </div>
    </div>
  );
};

export default SignUp;
