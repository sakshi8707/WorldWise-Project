import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import PageNav from "../Components/PageNav";
import { useAuth } from "../Contexts/FakeAuthContext";
import styles from "./SignUp.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const { signUp } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password && phone) signUp(email, password, phone);
  }

  return (
    <main className={styles.signup}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <div className={styles.row}>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
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
          <Button type="secondary">Facebook</Button>
        </div>
      </form>
    </main>
  );
}
