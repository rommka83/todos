// ----------------------------------------------------------------------

export function localStorageAvailable() {
  try {
    const key = 'random_key';
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export function localStorageGetItem(key: string, defaultValue = []) {
  const storageAvailable = localStorageAvailable();

  let value;

  if (storageAvailable) {
    const history = localStorage.getItem(key);
    value = history && typeof JSON.parse(history) === 'object' ? JSON.parse(history) : defaultValue;
  }

  return value;
}
