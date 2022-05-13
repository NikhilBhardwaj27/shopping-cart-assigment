import React, { useState } from "react";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/ui/button/button.component";
import FormInput from "../../components/ui/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import "./register.styles.scss";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const navigate = useNavigate();
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and ConfirmPassword should be same");
      return;
    }

    navigate("/");
  };

  return (
    <>
      <div className="register-container">
        <div className="register-label">
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone</p>
        </div>

        <div className="register-main">
          <form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              label="First Name"
              name="firstName"
              onChange={handleChange}
              value={firstName}
              required
            />
            <FormInput
              type="text"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              required
            />
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
              value={password}
              pattern="(?!.* )(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"
              title="Password must have length of 6 with one letter,one digit without any space"
              onChange={handleChange}
              required
            />
            <FormInput
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
              required
            />
            <Button type="submit" style={{ width: "100%" }}>
              Sign Up
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
