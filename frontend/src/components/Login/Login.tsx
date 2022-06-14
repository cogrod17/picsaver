import { Form } from "react-final-form";
import { Input, Button } from "components/global";
import "./Login.scss";
import { AppDispatch, authSelector } from "state";
import { useAppDispatch, useAppSelector } from "hooks";
import { login } from "state";
import { useEffect } from "react";

export const Login = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(authSelector);

  return (
    <div className="login-wrap">
      <Form
        onSubmit={(v) =>
          dispatch(login({ username: v?.username, password: v?.password }))
        }
        initialValues={{}}
        render={({ handleSubmit }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-header">Login</h1>
            <Input label="username" name="username" type="text" />
            <Input label="password" name="password" type="password" />
            <Button
              className="login-submit-button"
              text="login"
              type="submit"
            />
          </form>
        )}
      ></Form>
    </div>
  );
};
