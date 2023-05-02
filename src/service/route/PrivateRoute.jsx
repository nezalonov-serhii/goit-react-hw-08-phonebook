const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectToken } = require('redux/selector/selectors');

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectToken);
  return isAuth ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
