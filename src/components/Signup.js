import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

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
    <Container maxWidth="xs" style={{ width: '25%', marginTop: '100px' }}>
      <h2 className='mb-4'>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            className='mb-2'
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            className='mb-2'
            placeholder="Enter Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className='mb-2'
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className='mb-2'
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3'>
          Sign Up
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
}

export default Signup;
