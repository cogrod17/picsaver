import Spinner from "components/global/Spinner/Spinner";

import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "utils";
import "./App.scss";
import { Profile } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/" element={<Profile />} />
          <Route path="*" element={<div>YOU"RE IN</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
