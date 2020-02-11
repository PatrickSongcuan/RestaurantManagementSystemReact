import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

const authReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SAVE_AUTH':
          console.log(action.data.username + " SAVE AUTH");
          return state;
        default:
          return state;
      }
}

export default authReducer;