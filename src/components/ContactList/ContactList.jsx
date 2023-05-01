import { useDispatch, useSelector } from 'react-redux';
import {
  currentUserThunk,
  deleteContactThunk,
  getContactsThunk,
} from 'redux/thunk/contactsThunk';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
  selectToken,
} from 'redux/selector/selectors';

import {
  ContactContainer,
  ContactWrap,
  ContactsWrap,
  Item,
} from './ContactList.styled';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(selectToken);

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );

  useEffect(() => {
    token && dispatch(currentUserThunk(token));
    token && dispatch(getContactsThunk());
  }, [dispatch, token]);

  return (
    <ContactsWrap>
      <Filter />
      <ContactContainer>
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <ContactWrap>
                  <p>{name}: </p>
                  <p>{number}</p>
                </ContactWrap>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContactThunk(id));
                  }}
                  disabled={isLoading}
                >
                  Delete
                </button>
              </Item>
            );
          })}
        </ul>
      </ContactContainer>
    </ContactsWrap>
  );
}
