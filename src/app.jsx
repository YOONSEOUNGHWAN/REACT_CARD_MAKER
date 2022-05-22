import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/Login/login";
import Maker from "./components/Maker/maker";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route path="/maker" element={<Maker authService={authService} />} />
      </Routes>
    </div>
  );
}

export default App;
