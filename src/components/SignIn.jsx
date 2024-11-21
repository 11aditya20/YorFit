import React, { useState } from "react";
import { Container, Form, Input, Button, Title, SwitchText } from "../styles/FormStyles";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook

const SignIn = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth(); // Access login function from AuthContext

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    login(email, password); // Call login function
  };

  return (
    <Container>
      <Title>Sign In</Title>
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
        <Button type="submit">Sign In</Button>
      </Form>
      <SwitchText onClick={onSwitch}>Don't have an account? Sign Up</SwitchText>
    </Container>
  );
};

export default SignIn;
