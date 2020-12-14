import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import history from "../../utils/history";
import { signInUser } from "../../actions";

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    history.push("/user");
    dispatch(signInUser(values));
  };

  const authSuccess = useSelector((state) => state.signin.authSuccess);
  const authTry = useSelector((state) => state.signin.authTry);

  useEffect(() => {
    if (authSuccess && authTry) {
      history.push("/user");
    }
  }, [authSuccess, authTry]);

  return (
    <FormControl
      name="normal_login"
      className="login-form"
      onFinish={handleSubmit}
    >
      <TextField placeholder="Username" />
      <TextField type="password" placeholder="Password" />
      <Checkbox>Remember me</Checkbox>
      <Link href="">Forgot password</Link>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Sign in
      </Button>
      Or <Link to="/signup">register now!</Link>
    </FormControl>
  );
};

export default SignInForm;
