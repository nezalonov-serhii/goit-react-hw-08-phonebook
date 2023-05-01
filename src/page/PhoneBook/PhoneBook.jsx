import {
  AddContactsLink,
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
          <AddContactsLink to="add">Add Contacts</AddContactsLink>
        </LinkContainer>

        <Outlet />
      </PhoneBookContainer>
    </PhoneBookSection>
  );
};
