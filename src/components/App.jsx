import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useGetFetchContactsQuery } from 'redux/contactSlice';

export const App = () => {
  const { data, error, isLoading } = useGetFetchContactsQuery();
  // console.log('isUninitialized:', isUninitialized);
  // console.log('isLoading: ', isLoading);
  // console.log('data: ', data);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>

      {!isLoading && data.length === 0 ? (
        <span>Phonebook is still empty</span>
      ) : (
        <Filter />
      )}
      {isLoading === true && <span>Loading, please wait...</span>}
      {!isLoading && <ContactList />}
      {error && <span>Oops, try again</span>}
    </div>
  );
};
