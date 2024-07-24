export const getStorage = () => {
    const token = localStorage.getItem('chegirma-access');
    return token;
  }
  export const setStorage = (token) => {
    localStorage.setItem('chegirma-access', token);
}
export const getStorageR = () => {
  const token = localStorage.getItem('chegirma-refresh');
  return token
}
export const saveLogin = (password) => {
  localStorage.setItem('login-chegirma', password);
}
export const savePassword = (password) => {
  localStorage.setItem('password-chegirma', password);
}

export const getLoginPassword = () => {
  return {
      login: localStorage.getItem('login-chegirama'),
      password: localStorage.getItem('password-chegirma'),
  }
}