//reducers produce the state of your application
//  must be pure i.e. returns the exact same output for a given input

// takes 2 parameters: current state & an action

const initialState = { displayable: [0, 1, 2] };


function rootReducer(state = initialState, action){
  console.log(`reducer`);
  console.log(`state: ${state}`);
  console.log(`${action.payload}`);
  switch(action.type){
    case "SLIDE_CONTENT":
      console.log('SLIDE_CONTENT');
      return {
        ...state,
        displayable: action.payload
      };
    default:
      return state;
    }
}

export default rootReducer;
