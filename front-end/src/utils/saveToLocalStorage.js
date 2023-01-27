/**
 * @typedef {Object} IDataProps
 * @property {'cart' | 'user'} key
 * @property { unknown } value
 *
 * @param {IDataProps} props
 * @returns {void}
 */
export default function saveToLocalStorage(props) {
  const data = JSON.stringify(props.value);
  localStorage.setItem(key, data);
}
