import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://670e49fc073307b4ee463cbe.mockapi.io/userapi").then((response) => {
      setValue(response.data)
    })
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      if (password) {
        let filterData = value.filter((items) => items.email == email);
        if (filterData.length === 0) {
          alert("can't find your email, please register first");
          navigate("/signup");
        } else {
          if (password == filterData[0]?.password) {
            toast.success("login successfully");
            localStorage.setItem('email', filterData)
            navigate("/");
          } else {
            toast.warning("please enter correct password");
          }
        }
      } else {
        toast.error("please fill the password");
      }
    } else {
      toast.error("please fill the email");
    }
  };



  return (
    <Container maxWidth="xs" style={{ marginTop: '100px', width: '25%' }}>
      <h2 className='mb-4'>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className='mb-4'
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3'>
          Login
        </Button>
      </Form>

      <a href='./Signup'>Not a User? Sign Up</a>
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

    </Container>
  );
}

export default Login;
