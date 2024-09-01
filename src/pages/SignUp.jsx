import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Components/Button";
import PageNav from "../Components/PageNav";
import { useAuth } from "../Contexts/FakeAuthContext";
import styles from "./SignUp.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email && password) {
      signUp(email, password);

      axios
        .post("http://localhost:3001/signup", { name, email, password }, { withCredentials: true }  )
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.signup}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className={styles.btnn}>
          <Button type="primary">Sign Up</Button>
        </div>
        <div className={styles.socialLogin}>
          <p>Or sign up with</p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialResponseDecode = jwtDecode(
                credentialResponse.credential
              );
              console.log(credentialResponseDecode);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </form>
    </main>
  );
}
