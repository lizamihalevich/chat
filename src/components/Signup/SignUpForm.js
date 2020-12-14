import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewUserToDatabase } from "../../actions";
import history from "../../utils/history";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmitSignUp = (values) => {
    dispatch(addNewUserToDatabase(values));
    history.push("/user");
  };

  return (
    <FormControl name="nest-messages" onFinish={handleSubmitSignUp}>
      <TextField />
      <TextField />
      <TextField type="password" />
      <TextField type="textarea" />
      <Button type="primary" htmlType="submit">
        Sign Up
      </Button>
      <span>Already have an account? </span>
      <Link to="/signin">Sign in!</Link>
    </FormControl>
  );
};

export default SignUpForm;
