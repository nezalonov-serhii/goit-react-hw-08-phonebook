import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';

import { Filter } from './Filter/Filter';
import {
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
                    handelDelete(id);
                  }}
                  disabled={isLoading}
                >
                  <TiDeleteOutline />
                </button>
              </Item>
            );
          })}
        </ul>
      </ContactContainer>
    </ContactsWrap>
  );
}
