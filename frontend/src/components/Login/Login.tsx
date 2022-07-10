import { Form } from "react-final-form";
import { Input, Button } from "components/global";
// import "./Login.scss";
import { authSelector } from "state";
import { useAppDispatch, useAppSelector } from "hooks";
import { login } from "state";
import Spinner from "components/global/Spinner/Spinner";

export const Login = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(authSelector);

  if (loading) return <Spinner />;

  return (
    <div className="flex content-center justify-center self-center min-w-[500px]">
      <Form
        onSubmit={(v) =>
          dispatch(login({ username: v?.username, password: v?.password }))
        }
        initialValues={{}}
        render={({ handleSubmit }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-header">Login</h1>
            <Input label="Username" name="username" type="text" />
            <Input label="Password" name="password" type="password" />
            <Button
              className="login-submit-button"
              text="login"
              type="submit"
            />
            {error && (
              <div className="login-error">Invalid Email or Username</div>
            )}
          </form>
        )}
      ></Form>
    </div>
  );
};
