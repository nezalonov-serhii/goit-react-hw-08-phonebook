import { useState } from 'react';
import { Form, LoginSection } from './Register.styled';
import { useDispatch } from 'react-redux';
import { signupThunk } from 'redux/thunk/contactsThunk';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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
        // console.log(user);
        toast.success(`${user.name} hi, you have successfully registered`);
      })
      .catch(error => {
        console.log(error);
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
    <LoginSection>
      <Form onSubmit={handleSubmit}>
        <h2>Please enter Name, Email and Password</h2>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            name="name"
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
        <button type="submit">Sign up</button>
      </Form>
    </LoginSection>
  );
};

export default Register;