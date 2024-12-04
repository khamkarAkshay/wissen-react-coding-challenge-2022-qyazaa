export function setSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}

export function getSessionStorage(key) {
  return {
    [key]: sessionStorage.getItem(key),
  };
}

export function clearSessionStorage() {
  sessionStorage.clear();
}
