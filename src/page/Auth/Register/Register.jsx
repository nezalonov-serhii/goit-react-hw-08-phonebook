import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import Loader from 'components/Loader/Loader';

import { signupThunk } from 'redux/thunk/contactsThunk';
import { selectIsAuthLoading } from 'redux/selector/selectors';

import { Form, LoginSection } from './Register.styled';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const isAuthLoading = useSelector(selectIsAuthLoading);

  const handleInputChange = (value, name) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

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
      name,
      email,
      password,
    };

    dispatch(signupThunk(user))
      .unwrap()
      .then(({ user }) => {
        toast.success(`${user.name} hi, you have successfully registered`);
      })
      .catch(error => {
        toast.error(`${error.message}`);
      });

    resetForm();
  };

  const resetForm = () => {
    setName('');
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
          <h2>Please enter Name, Email and Password</h2>
          <label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              required
              onChange={e => {
                handleInputChange(e.target.value, e.target.name);
              }}
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              required
              onChange={e => {
                handleInputChange(e.target.value, e.target.name);
              }}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              autoComplete="off"
              required
              onChange={e => {
                handleInputChange(e.target.value, e.target.name);
              }}
            />
          </label>
          <button type="submit" disabled={isAuthLoading}>
            {isAuthLoading && <Loader size="20" />}
            {!isAuthLoading && <span>Sign up</span>}
          </button>
        </Form>
      </LoginSection>
    </motion.div>
  );
};

export default Register;
