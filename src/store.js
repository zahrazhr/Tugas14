import { createStore } from 'redux';

// Action Types
const TOGGLE_THEME = 'TOGGLE_THEME';

// Action Creators
export const toggleTheme = () => ({
  type: TOGGLE_THEME
});

// Initial State
const initialState = {
  theme: 'light'
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

export default store;
