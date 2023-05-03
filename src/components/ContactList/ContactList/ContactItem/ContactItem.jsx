import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TiDeleteOutline } from 'react-icons/ti';

import Loader from 'components/Loader/Loader';

import { deleteContactThunk } from 'redux/thunk/contactsThunk';
import { selectIsLoading } from 'redux/selector/selectors';

import { ButtonsWrap, ContactWrap, Item, TelLink } from './ContactItem.styled';

const ContactItems = ({ visibleContacts }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handelDelete = id => {
    dispatch(deleteContactThunk(id))
      .unwrap()
      .then(user => {
        toast.success(`${user.name} removed from contacts.`);
      })
      .catch(() => toast.error('Sorry something went wrong try again'));
  };

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactWrap>
              <p>{name}: </p> <TelLink href={`tel:${number}`}>{number}</TelLink>
            </ContactWrap>
            <ButtonsWrap>
              {isLoading && <Loader size={'30'} />}
              <button
                type="button"
                onClick={() => {
                  handelDelete(id);
                }}
                disabled={isLoading}
              >
                <TiDeleteOutline />
              </button>
            </ButtonsWrap>
          </Item>
        );
      })}
    </ul>
  );
};

export default ContactItems;
