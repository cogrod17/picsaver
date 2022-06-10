import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Login } from "./components/Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
