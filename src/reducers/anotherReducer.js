const anotherReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SAVE_AUTH2':
          console.log(action.data.username + "SAVE AUTH 2");
          return state;
        default:
          return state;
      }
}

export default anotherReducer;