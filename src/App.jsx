import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { MainRouter } from "./routes/MainRouter";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase/firebase";
import "./App.css";


function App() {

  const [user, setUser] = useState(null);

  const onLogin = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user);
        setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          role: 'ADMIN_ROLE'
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const onLogout = () => {
    setUser(null);
  }
  return (
    <>
      <NavBar user={user} onLogout={onLogout} onLogin={onLogin}/>
      <div className="container">
      <MainRouter user={user}/>
      </div>
    </>
  );
}

export default App;
