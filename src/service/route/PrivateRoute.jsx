const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectIsLoggedIn } = require('redux/selector/selectors');

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  return isAuth ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
