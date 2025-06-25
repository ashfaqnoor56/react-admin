import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import '../App.css'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [number, setNumber] = useState('');


const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == cpassword) {
      if (email == "" && password == "")
        return toast.error("invaild email or password");
      if(name == "")
        return toast.error("Fill your name");
       if(number == "")
        return toast.error("Fill your number");
      axios.post("https://670e49fc073307b4ee463cbe.mockapi.io/userapi", {
        number,
        email,
        password,
      });
      setNumber("");
      setEmail("");
      setPassword("");
      setNumber("");
      setCpassword("");
      navigate("/login");
    } else {
      toast.warn("Password does not Match");
    }
  };

  return (
    
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="signup-box p-4 shadow rounded bg-white" style={{ width: '100%', maxWidth: '450px' }}>
        <h2 className="mb-4 text-center text-decoration-underline">Sign Up</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicMobileNumber" className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Mobile Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Confirm password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Container>
  );
}

export default Signup;
