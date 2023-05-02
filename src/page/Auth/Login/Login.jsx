import { useDispatch } from 'react-redux';
import { Form, LoginSection } from './Login.styled';
import { useState } from 'react';
import { loginThunk } from 'redux/thunk/contactsThunk';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <LoginSection>
      <Form onSubmit={handleSubmit}>
        <h2>Please enter Email and Password</h2>
        <label>
          <input
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
        <button type="submit">Sign in</button>
      </Form>
    </LoginSection>
  );
};

export default Login;
