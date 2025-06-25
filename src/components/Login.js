import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import '../App.css'

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
            sessionStorage.setItem('email', filterData)
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
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-box p-4 shadow rounded bg-white" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="mb-4 text-center text-decoration-underline">Login</h2>
        <Form onSubmit={handleSubmit}>
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

          <Button variant="primary" type="submit" className="w-100 mb-3">
            Login
          </Button>
        </Form>

        <div className="text-center">
          <em>
            Not a User? <Link to="/Signup">Sign Up</Link>
          </em>
        </div>
      </div>

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
