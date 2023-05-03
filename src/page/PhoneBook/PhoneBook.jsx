import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  ContactsLink,
  LinkContainer,
  PhoneBookContainer,
  PhoneBookSection,
} from './PhoneBook.styled';

const PhoneBook = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <PhoneBookSection>
        <PhoneBookContainer>
          <LinkContainer>
            <ContactsLink to="contacts">Contacts</ContactsLink>
            <ContactsLink to="add">Add Contacts</ContactsLink>
          </LinkContainer>

          <Outlet />
        </PhoneBookContainer>
      </PhoneBookSection>
    </motion.div>
  );
};

export default PhoneBook;
