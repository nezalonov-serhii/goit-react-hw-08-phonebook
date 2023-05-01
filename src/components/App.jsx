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

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
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
