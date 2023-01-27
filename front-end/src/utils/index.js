export function fixedToTwoDecimalDigits(string) {
  return Number(string).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

/**
 * @param {'cart' | 'user'} key local storage key to retrieve
 * @returns { Record<string, unknown> | null}
 */
export function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  if (data === null) return null;
  return JSON.parse(data);
}

/**
 * @param {'cart' | 'user'} key
 * @param {unknown} value
 * @returns {void}
 */
export function saveToLocalStorage(key, value) {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}

/**
 * @typedef {Object} IEntryIdentifier
 * @property {string} key
 * @property {string} value
 *
 * @param {'cart' | 'user'} key local storage key from where to delete an entry
 * @param {IEntryIdentifier} entryIdentifier entry identifier in the format key/value pair: {key: value}
 *

 */
export function removeEntryFromLocalStorage(key, entryIdentifier) {
  const data = getFromLocalStorage(key);
  console.log(data);
  if (data === null) return null;
  const newData = data.filter((el) => el[entryIdentifier.key] !== entryIdentifier.value);
  saveToLocalStorage('cart', newData);
}
