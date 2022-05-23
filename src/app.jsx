import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/Login/login";
import Maker from "./components/Maker/maker";

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route path="/maker" element={<Maker FileInput = {FileInput} authService={authService} />} />
      </Routes>
    </div>
  );
}

export default App;
