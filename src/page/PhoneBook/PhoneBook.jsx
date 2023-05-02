import { Outlet } from 'react-router-dom';

import {
  ContactsLink,
  LinkContainer,
  PhoneBookContainer,
  PhoneBookSection,
} from './PhoneBook.styled';

const PhoneBook = () => {
  return (
    <PhoneBookSection>
      <PhoneBookContainer>
        <LinkContainer>
          <ContactsLink to="contacts">Contacts</ContactsLink>
          <ContactsLink to="add">Add Contacts</ContactsLink>
        </LinkContainer>

        <Outlet />
      </PhoneBookContainer>
    </PhoneBookSection>
  );
};

export default PhoneBook;
