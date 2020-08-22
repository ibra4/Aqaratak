const config = {
  headerTitle: null
};

const AppReducer = (state = config, {type, payload}) => {
  switch (type) {
    case 'SET_TITLE':
      return {...state, headerTitle: payload};
    default:
      return state;
  }
};

export default AppReducer;
