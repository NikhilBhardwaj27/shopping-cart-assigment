import React, { useState } from "react";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/ui/button/button.component";
import FormInput from "../../components/ui/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import "./login.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const navigate = useNavigate();
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-label">
          <h1>Login</h1>
          <p>Get access to your Orders,Wishlist and Recommendations </p>
        </div>

        <div className="login-main">
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              label="Email"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              pattern="(?!.* )(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"
              title="Password must have length of 6 with one letter,one digit without any space"
              value={password}
              onChange={handleChange}
              required
            />

            <Button type="submit" style={{ width: "100%" }}>
              LogIn
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
