import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import Loader from 'components/Loader/Loader';

import { loginThunk } from 'redux/thunk/contactsThunk';
import { selectIsAuthLoading } from 'redux/selector/selectors';

import { Form, LoginSection } from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isAuthLoading = useSelector(selectIsAuthLoading);
  const dispatch = useDispatch();

  const handleInputChange = (value, name) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(loginThunk(user))
      .unwrap()
      .then(({ user }) => {
        toast.success(`${user.name} hello, you have successfully logged in`);
      })
      .catch(error => {
        toast.error(
          'Sorry, try again, this user was not found or the password is incorrect'
        );
      });

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <LoginSection>
        <Form onSubmit={handleSubmit}>
          <h2>Please enter Email and Password</h2>
          <label>
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={e => {
                handleInputChange(e.target.value, e.target.name);
              }}
            />
          </label>
          <label>
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              autoComplete="off"
              onChange={e => {
                handleInputChange(e.target.value, e.target.name);
              }}
            />
          </label>
          <button type="submit" disabled={isAuthLoading}>
            {isAuthLoading && <Loader size="20" />}
            {!isAuthLoading && <span>Sign in</span>}
          </button>
        </Form>
      </LoginSection>
    </motion.div>
  );
};

export default Login;
