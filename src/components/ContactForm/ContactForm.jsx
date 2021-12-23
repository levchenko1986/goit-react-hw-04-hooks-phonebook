import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const initialState = {
  name: '',
  number: '',
};

const ContactForm = props => {
  const [data, setData] = useState(initialState);

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmitContact(data);
    setData(initialState);
  };
  const inputChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  const nameId = nanoid();
  const numberId = nanoid();
  const { name, number } = data;

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={nameId}>
          Name
          <input
            id={nameId}
            className={styles.input}
            value={name}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={inputChange}
          />
        </label>

        <label className={styles.label} htmlFor={numberId}>
          Number
          <input
            id={numberId}
            className={styles.input}
            type="tel"
            value={number}
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={inputChange}
          />
        </label>
        <button className={styles.button}>Add contact</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  nameId: PropTypes.number,
  numberId: PropTypes.number,
  handleSubmit: PropTypes.func,
  formSubmit: PropTypes.func,
  inputChange: PropTypes.func,
};

export default ContactForm;
