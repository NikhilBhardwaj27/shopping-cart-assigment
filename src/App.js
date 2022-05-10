import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Product = () => <h1>product</h1>;
const Register = () => <h1>Register</h1>;
const SignIn = () => <h1>SignIn</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index  element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
