import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useGetFetchContactsQuery } from 'redux/getFetchAllContactsThunk';

export const App = () => {
  const { error, isUninitialized } = useGetFetchContactsQuery();
  console.log('isUninitialized:', isUninitialized);
  // const { items, isLoading, error } = useSelector(getContacts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getContactsThunk());
  // }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />

      {/* {data.length === 0 ? <span>Phonebook is still empty</span> : <Filter />}
      {isLoading === true && <span>Loading, please wait...</span>} */}
      {isUninitialized && <ContactList />}
      {error !== null && <span>Oops, try again</span>}
    </div>
  );
};
