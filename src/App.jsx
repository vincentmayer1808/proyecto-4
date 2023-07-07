import { useState } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { MainRouter } from "./routes/MainRouter";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase/firebase";
import { Contact } from "./components/contact/Contact";

function App() {
  const [user, setUser] = useState(null);

  const onLogin = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          role: "ADMIN_ROLE",
        });
      })
      .catch((error) => {
        console.log(error);
        return window.alert(
          "There has been an error connecting to your session, please try again later"
        );
      });
  };

  const onLogout = () => {
    setUser(null);
  };
  
  return (
    <>
      <NavBar user={user} onLogout={onLogout} onLogin={onLogin} />

      <MainRouter user={user} />

      <Contact />
    </>
  );
}

export default App;
