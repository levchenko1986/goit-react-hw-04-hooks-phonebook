import PropTypes from "prop-types";
import id from "../contacts.json";
import styles from "./ContactList.module.css";

const ContactList = ({ getContacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {getContacts.map(({ name, number, id }) => {
        const onDeleteContact = () => deleteContact(id);
        return (
          <li className={styles.item} key={number.toString()}>
            <p>{name}:</p>
            <p>{number}</p>
            <button
              className={styles.button}
              type="button"
              onClick={onDeleteContact}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),

  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
