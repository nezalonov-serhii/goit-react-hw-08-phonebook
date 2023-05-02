const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectToken } = require('redux/selector/selectors');

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectToken);
  return !isAuth ? children : <Navigate to={'/phone-book/contacts'} />;
};

export default PublicRoute;
