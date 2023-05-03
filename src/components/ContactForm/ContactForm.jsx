import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import Loader from 'components/Loader/Loader';

import { logout } from 'redux/Slice/signupSlice/signupSlice';
import { createContactThunk } from 'redux/thunk/contactsThunk';
import { selectContacts, selectIsLoading } from 'redux/selector/selectors';

import { Form } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  const handleInputChange = (value, name) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return toast.info(`${name} is already in contacts.`);
    } else if (
      contacts.find(el => el.number.toLowerCase() === number.toLowerCase())
    ) {
      return toast.info(`${number} is already in contacts.`);
    }

    const newContact = {
      name,
      number,
    };

    dispatch(createContactThunk(newContact))
      .unwrap()
      .then(() => {
        toast.success(`${name} add in contacts.`);
      })
      .catch(error => {
        if (error.message === 'Unauthorized') {
          toast.error(error.message);
          dispatch(logout());
        } else toast.error('Sorry something went wrong try again');
      });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,

        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Jacob Mercer"
            onChange={e => {
              handleInputChange(e.target.value, e.target.name);
            }}
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+38-8888-8888-88"
            onChange={e => {
              handleInputChange(e.target.value, e.target.name);
            }}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading && <Loader size="20" />}
          {!isLoading && <span>Add contact</span>}
        </button>
      </Form>
    </motion.div>
  );
}

export default ContactForm;
