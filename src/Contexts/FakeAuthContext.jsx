import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };

  
  



  
  

  //updated code for showing user credential after loign/signup on homepage

// import { createContext, useContext, useReducer } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// const initialState = {
//   user: null,
//   isAuthenticated: false,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "login":
//       return { ...state, user: action.payload, isAuthenticated: true };
//     case "logout":
//       return { ...state, user: null, isAuthenticated: false };
//     case "signup":
//       return { ...state, user: action.payload, isAuthenticated: true };
//     default:
//       throw new Error("Unknown action");
//   }
// }

// function AuthProvider({ children }) {
//   const [{ user, isAuthenticated }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   // Function to handle user login
//   function login(email, password) {
//     axios
//       .post("http://localhost:3001/login", { email, password })
//       .then((result) => {
//         const user = {
//           name: result.data.name,
//           email: result.data.email,
//           avatar: "https://i.pravatar.cc/100?u=zz", // Placeholder avatar
//         };
//         dispatch({ type: "login", payload: user });
//       })
//       .catch((err) => {
//         console.error("Login error:", err);
//         // Optionally, handle errors here, e.g., by setting an error message in the state
//       });
//   }

//   // Function to handle user signup
//   function signUp(name, email, password) {
//     axios
//       .post("http://localhost:3001/signup", { name, email, password })
//       .then((result) => {
//         const newUser = {
//           name: result.data.name,
//           email: result.data.email,
//           avatar: "https://i.pravatar.cc/100?u=new", // Placeholder avatar
//         };
//         dispatch({ type: "signup", payload: newUser });
//       })
//       .catch((err) => {
//         console.error("Signup error:", err);
//         // Optionally, handle errors here, e.g., by setting an error message in the state
//       });
//   }

//   // Function to handle user logout
//   function logout() {
//     dispatch({ type: "logout" });
//   }

//   return (
//     <AuthContext.Provider
//       value={{ user, isAuthenticated, login, logout, signUp }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined)
//     throw new Error("AuthContext was used outside AuthProvider");
//   return context;
// }

// export { AuthProvider, useAuth };
