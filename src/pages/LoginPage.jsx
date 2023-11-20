import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useAuthContext } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      alert(error);
    }
  };
  return (
    <div
      style={{ width: "75vh", height: "100vh" }}
      className="d-flex align-items-center justify-content-center m-auto container-fluid m-sm-auto"
    >
      <Container className="form-signin w-100 m-auto justify-content-center container-fluid">
        <Card
          className="p-4 bg-green-900 d-flex flex-column text-center "
          style={{ height: "85vh" }}
        >
          <Form onSubmit={handleSubmit}>
            <a href="#" className="animationimg">
              <img
                className=" img-fluid"
                src="public\Logo.svg"
                alt=""
                width="200"
                height="200"
              />
            </a>

            <h1 className="h1 mb-4 card-text text-white">ZooPedia</h1>

            <h1 className="h4 mb-4 text-white">Please sign in</h1>

            <Form.Floating className="mb-3">
              <Form.Control
                type="email"
                id="floatingInput"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                type="password"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </Form.Floating>

            <Button variant="success" type="submit">
              LOGIN
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;
