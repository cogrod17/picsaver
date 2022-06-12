import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "utils";
import "./App.scss";
import { Profile } from "./components";

// import { useAppDispatch } from "hooks";

// import { useEffect } from "react";
// import { login } from "state/slices/auth/actions";

const App: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const user = useAppSelector(userSelector);
  // const auth = useAppSelector(authSelector);
  // useEffect(() => {
  //   dispatch(login({ username: "scott", password: "rockhard" }));
  // }, [dispatch]);

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
