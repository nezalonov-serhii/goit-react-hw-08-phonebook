import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';

import Filter from './Filter/Filter';
import Loader from 'components/Loader/Loader';

import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/thunk/contactsThunk';

import {
  selectContacts,
  selectFilter,
  selectIsLoading,
  selectIsRefreshing,
  selectToken,
  selectUser,
} from 'redux/selector/selectors';

import {
  AddLink,
  ButtonsWrap,
  ContactContainer,
  ContactWrap,
  ContactsWrap,
  Item,
  TelLink,
  WelcomeMessage,
} from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  const isContactsEmpty = Boolean(contacts.length);
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );

  useEffect(() => {
    token && dispatch(getContactsThunk(token));
  }, [dispatch, token]);

  const handelDelete = id => {
    dispatch(deleteContactThunk(id))
      .unwrap()
      .then(user => {
        toast.success(`${user.name} removed from contacts.`);
      })
      .catch(() => toast.error('Sorry something went wrong try again'));
  };

  return (
    <>
      {isRefreshing && <Loader />}
      <ContactsWrap>
        {!isContactsEmpty && !isRefreshing && !isLoading && (
          <ContactContainer>
            <WelcomeMessage>
              Hello {user.name} please{' '}
              {<AddLink to="/phone-book/add">add</AddLink>} your first contact
            </WelcomeMessage>
          </ContactContainer>
        )}

        {isContactsEmpty && (
          <>
            <Filter />
            <ContactContainer>
              <ul>
                {visibleContacts.map(({ id, name, number }) => {
                  return (
                    <Item key={id}>
                      <ContactWrap>
                        <p>{name}: </p>{' '}
                        <TelLink href={`tel:${number}`}>{number}</TelLink>
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
            </ContactContainer>
          </>
        )}
      </ContactsWrap>
    </>
  );
}

export default ContactList;
