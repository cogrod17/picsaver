import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "utils";
import "./App.scss";
import { Profile } from "./components";
import { useAppDispatch } from "hooks";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  // const auth = useAppSelector(authSelector);
  // useEffect(() => console.log(auth), [auth]);
  // useEffect(() => {
  //   setTimeout(
  //     () => dispatch(setTokens({ refresh: "q34fasdae", access: "qwefasdvqe" })),
  //     5000
  //   );
  // }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/" element={<Profile />} />
          <Route path="/login" element={<div>YOU"RE IN</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
