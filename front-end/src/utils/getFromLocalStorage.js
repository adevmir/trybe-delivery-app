/**
 * @typedef {Object} IKey
 * @property {'cart' | 'user'} key
 * @param {IKey} props local storage key to retrieve
 *
 * @returns { Record<string, unknown> | null}
 */
export default function getFromLocalStorage(props) {
  const data = localStorage.getItem(props.key);
  if (data === null) return null;
  return JSON.parse(data);
}
