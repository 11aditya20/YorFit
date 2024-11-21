import React, { useState } from "react";
import { Container, Form, Input, Button, Title, SwitchText } from "../styles/FormStyles";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook

const SignUp = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { signup } = useAuth(); // Access signup function from AuthContext

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    signup(email, password); // Call signup function
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </Form>
      <SwitchText onClick={onSwitch}>Already have an account? Sign In</SwitchText>
    </Container>
  );
};

export default SignUp;
