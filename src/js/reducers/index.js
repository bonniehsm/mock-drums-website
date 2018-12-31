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

/*

const featuredProducts = [
    {
      media: "",
      title: "Featured Product",    //remove this and make this the object label
      label: "AX-Edge",
      summary: "In a React component the state holds up data and the component might render such data to the user.",
      link: "#"
    },
    {
      media: "",
      title: "Featured Product",
      label: "AX-Edge",
      summary: "In a React component the state holds up data and the component might render such data to the user.",
      link: "#"
    }
];

*/
