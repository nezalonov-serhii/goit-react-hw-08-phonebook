import {
  ContactsLink,
  LinkContainer,
  PhoneBookContainer,
  PhoneBookSection,
} from './PhoneBook.styled';
import { Outlet } from 'react-router-dom';

export const PhoneBook = () => {
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
