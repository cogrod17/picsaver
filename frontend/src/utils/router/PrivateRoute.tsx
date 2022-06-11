import { Outlet } from "react-router-dom";
import { Login } from "components";
import { useAppSelector } from "hooks";
import { authSelector } from "state";

export const PrivateRoute: React.FC = () => {
  const auth = useAppSelector(authSelector);
  return auth?.access ? <Outlet /> : <Login />;
};
