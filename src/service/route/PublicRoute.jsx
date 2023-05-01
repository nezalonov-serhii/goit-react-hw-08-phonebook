const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectIsLoggedIn } = require('redux/selector/selectors');

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  return !isAuth ? children : <Navigate to={'/phone-book/contacts'} />;
};

export default PublicRoute;
