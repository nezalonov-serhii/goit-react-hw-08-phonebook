import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import ContactItems from './ContactItem/ContactItem';
import Loader from 'components/Loader/Loader';
import Filter from '../Filter/Filter';

import {
  selectContacts,
  selectFilter,
  selectIsLoading,
  selectIsRefreshing,
  selectUser,
} from 'redux/selector/selectors';

import {
  AddLink,
  ContactContainer,
  ContactsWrap,
  WelcomeMessage,
} from './ContactList.styled';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  const isContactsEmpty = Boolean(contacts.length);
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {(isRefreshing || isLoading) && !isContactsEmpty && <Loader />}
      <ContactsWrap>
        {!isContactsEmpty && !isRefreshing && !isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <ContactContainer>
              <WelcomeMessage>
                Hello {user.name} please{' '}
                {<AddLink to="/phone-book/add">add</AddLink>} your first contact
              </WelcomeMessage>
            </ContactContainer>
          </motion.div>
        )}

        {isContactsEmpty && (
          <>
            <Filter />
            <ContactContainer>
              {!visibleContacts.length && <p>No matches</p>}
              {visibleContacts && (
                <ContactItems visibleContacts={visibleContacts} />
              )}
            </ContactContainer>
          </>
        )}
      </ContactsWrap>
    </motion.div>
  );
}

export default ContactList;
