import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthLoading, selectUser } from 'redux/selector/selectors';
import { Logout, User, UserWrap } from './UserMenu.styled';
import { logoutThunk } from 'redux/thunk/contactsThunk';
import Loader from 'components/Loader/Loader';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  return (
    <UserWrap>
      <User>{user.name}</User>
      <Logout
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        {isAuthLoading && <Loader size="20" />}
        {!isAuthLoading && <span>Logout</span>}
      </Logout>
    </UserWrap>
  );
};

export default UserMenu;
