import { Form } from "react-final-form";
import { Input, Button } from "components/global";
import "./Login.scss";
import { AppDispatch } from "state";
import { useAppDispatch } from "hooks";

export const Login = () => {
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="login-wrap">
      <Form
        onSubmit={(v) => console.log(v)}
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
