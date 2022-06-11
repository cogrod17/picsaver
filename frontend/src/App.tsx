import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "utils";
import "./App.scss";
import { Login, Profile } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<PrivateRoute />}>
          <Route element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
