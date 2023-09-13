import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/authActions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(signIn({ email, password })).then(() => {
                navigate("/");
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="card-signIn">
                <div className="bg-signIn">
                    <h2>Login</h2>
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
                        <button type="submit">Log in</button>
                    </form>
                </div>
                <div className="blob-signIn"></div>
            </div>
        </div>
    );
};

export default SignIn;
