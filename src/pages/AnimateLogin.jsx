import React, { useState } from "react";
import * as Components from "./AnimatedStyle";
import PageNav from "../Components/PageNav.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/FakeAuthContext";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [signIn, toggle] = useState(true);

  const navigate = useNavigate();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!signUpName || !signUpEmail || !signUpPassword) {
      toast.error("All fields are required for sign-up.", {
        position: "top-center",
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      const user = userCredential.user;

      // Add user info to Firestore
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        name: signUpName,
        password: signUpPassword, // Store hashed password in production
      });

      toast.success("User registered successfully!", {
        position: "top-center",
      });
      navigate("/app/cities");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use. Please try a different email.", {
          position: "bottom-center",
        });
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format. Please enter a valid email.", {
          position: "bottom-center",
        });
      } else if (error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters.", {
          position: "bottom-center",
        });
      } else {
        toast.error("Error during sign-up: " + error.message, {
          position: "bottom-center",
        });
      }
    }
  };

  // Sign-In Handler
 const handleSignIn = async (e) => {
   e.preventDefault();
   try {
     await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
     toast.success("User logged in successfully!", {
       position: "top-center",
     });
     navigate("/app/cities");
   } catch (error) {
     if (error.code === "auth/user-not-found") {
       toast.error("No user found with this email. Please sign up.", {
         position: "bottom-center",
       });
     } else if (error.code === "auth/wrong-password") {
       toast.error("Incorrect password. Please try again.", {
         position: "bottom-center",
       });
     } else {
       toast.error("Error during sign-in: " + error.message, {
         position: "bottom-center",
       });
     }
   }
 };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success("Google sign-in successful", {
        position: "top-center",
      });
      navigate("/app/cities");
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        toast.error("The popup was closed before completing sign-in.", {
          position: "bottom-center",
        });
      } else {
        toast.error("Error during Google sign-in: " + error.message, {
          position: "bottom-center",
        });
      }
    }
  };

  return (
    <main>
      <Components.EntireContentLogin>
        <Components.NavBar>
          <PageNav />
        </Components.NavBar>
        <Components.Container>
          <Components.SignUpContainer $signinIn={signIn}>
            <Components.Form>
              <Components.Title>Create Account</Components.Title>

              <Components.SocialIcons>
                <Components.Icon href="#" onClick={handleGoogleSignIn}>
                  <i className="fab fa-google-plus-g"></i>
                </Components.Icon>
                <Components.Icon href="#">
                  <i className="fab fa-facebook-f"></i>
                </Components.Icon>
                <Components.Icon href="#">
                  <i className="fab fa-github"></i>
                </Components.Icon>
                <Components.Icon href="#">
                  <i className="fab fa-linkedin-in"></i>
                </Components.Icon>
              </Components.SocialIcons>

              <Components.Input
                type="text"
                placeholder="Name"
                value={signUpName}
                onChange={(e) => setSignUpName(e.target.value)}
              />
              <Components.Input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
              <Components.Button onClick={handleSignUp}>
                Sign Up
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer $signinIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                type="email"
                placeholder="Email"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button onClick={handleSignIn}>
                Sign In
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer $signinIn={signIn}>
            <Components.Overlay $signinIn={signIn}>
              <Components.LeftOverlayPanel $signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel $signinIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter your personal details and start your journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </Components.EntireContentLogin>
    </main>
  );
}

export default App;



