import { PhoneBook } from 'page/PhoneBook/PhoneBook';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import { HomePage } from 'page/HomePage/HomePage';
import Login from 'page/Auth/Login/Login';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import Register from 'page/Auth/Register/Register';
import PrivateRoute from 'service/route/PrivateRoute';
import PublicRoute from 'service/route/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/selector/selectors';
import { currentUserThunk } from 'redux/thunk/contactsThunk';
import { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    token && dispatch(currentUserThunk(token));
  }, [dispatch, token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="phone-book"
            element={
              <PrivateRoute>
                <PhoneBook />
              </PrivateRoute>
            }
          >
            <Route path="contacts" element={<ContactList />} />
            <Route path="add" element={<ContactForm />} />
          </Route>
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

// rtyrty@gmail.com
// qweeqwqweeqw@qwe.com
