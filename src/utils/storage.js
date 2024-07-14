export const getStorage = () => {
    const token = localStorage.getItem('tour-access');
    return token;
  }
  