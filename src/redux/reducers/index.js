//reducers produce the state of your application
//  must be pure i.e. returns the exact same output for a given input

// takes 2 parameters: current state & an action

const initialState = {
  someState: []
}

function rootReducer(state=initialState, action){
  return state;
}

export default rootReducer;
