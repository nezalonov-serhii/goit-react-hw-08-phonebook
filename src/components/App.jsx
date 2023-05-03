import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { lazy, useEffect } from 'react';

import PrivateRoute from 'service/route/PrivateRoute';
import PublicRoute from 'service/route/PublicRoute';
import { selectToken } from 'redux/selector/selectors';
import { currentUserThunk, getContactsThunk } from 'redux/thunk/contactsThunk';

import Layout from './Layout/Layout';
import { logout } from 'redux/Slice/signupSlice/signupSlice';
const PhoneBook = lazy(() => import('page/PhoneBook/PhoneBook'));
const HomePage = lazy(() => import('page/HomePage/HomePage'));
const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
const ContactList = lazy(() => import('./ContactList/ContactList/ContactList'));
const Register = lazy(() => import('page/Auth/Register/Register'));
const Login = lazy(() => import('page/Auth/Login/Login'));

export function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    token &&
      dispatch(currentUserThunk(token))
        .unwrap()
        .then(() => {
          dispatch(getContactsThunk(token))
            .unwrap()
            .catch(error => {
              if (error.message === 'Unauthorized') {
                toast.error(error.message);
                dispatch(logout());
              } else toast.error('Sorry something went wrong try again');
            });
        })
        .catch(error => {
          if (error.message === 'Unauthorized') {
            toast.error(error.message);
            dispatch(logout());
          } else toast.error('Sorry something went wrong try again');
        });
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
