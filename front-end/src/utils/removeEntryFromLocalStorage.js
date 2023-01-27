import getFromLocalStorage from './getFromLocalStorage';
import saveToLocalStorage from './saveToLocalStorage';

/**
 * @typedef {Object} IKey
 * @property {'cart' | 'user'} key
 *
 * @typedef {Object} IEntryIdentifier
 * @property {string} key
 * @property {string} value
 *
 * @param {IKey} key local storage key from where to delete an entry
 * @param {IKey} entryIdentifier entry identifier in the format key/value pair: {key: value}
 *

 */
export default function removeEntryFromLocalStorage({ key, entryIdentifier }) {
  const data = getFromLocalStorage({ key });
  if (data === null) return null;
  const newData = data.filter((el) => el[entryIdentifier.key] !== entryIdentifier.value);
  saveToLocalStorage({ key: 'cart', value: newData });
}
