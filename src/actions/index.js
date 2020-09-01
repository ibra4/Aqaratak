export const setLocale = (title) => {
  return {
    type: 'SET_TITLE',
    payload: title,
  };
};

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};
