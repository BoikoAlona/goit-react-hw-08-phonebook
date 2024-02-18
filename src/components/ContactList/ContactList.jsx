import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { apiRemoveContacts } from 'components/services/api';
import { selectFilteredContacts } from './../../redux/contacts/contactsSliceSelectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteProfile = id => {
    const action = apiRemoveContacts(id);
    dispatch(action);
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={css.profileItem}>
            {contact.name}: {contact.number}
            <button
              className={css.buttonProfile}
              onClick={() => handleDeleteProfile(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { ContactList };
