import {
  useAddContactMutation,
  useGetFetchContactsQuery,
} from 'redux/contactSlice';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const { data } = useGetFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.target;

    if (
      data.find(
        contact =>
          contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
      )
    ) {
      alert(`${form.elements.name.value} is already in contacts.`);
      return;
    }

    addContact({
      name: form.elements.name.value,
      phone: form.elements.number.value,
    });
    // useAddContactMutation({
    //   name: form.elements.name.value,
    //   phone: form.elements.number.value,
    // });

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label} htmlFor="">
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label} htmlFor="">
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <input className={css.btn} type="submit" value="Add contact" />
    </form>
  );
};
