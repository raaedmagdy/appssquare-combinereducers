const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Define initial state
const initialState = {
  div1Width: "50%",
  div2Width: "50%",
};

// Define action types
const EXPAND_DIV_1 = "EXPAND_DIV_1";
const EXPAND_DIV_2 = "EXPAND_DIV_2";

// Define action creators
const expandDiv1 = () => ({ type: EXPAND_DIV_1 });
const expandDiv2 = () => ({ type: EXPAND_DIV_2 });

// Define reducers
const div1Reducer = (state = initialState.div1Width, action) => {
  switch (action.type) {
    case EXPAND_DIV_1:
      return "100%";
    default:
      return state;
  }
};

const div2Reducer = (state = initialState.div2Width, action) => {
  switch (action.type) {
    case EXPAND_DIV_2:
      return "100%";
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = Redux.combineReducers({
  div1: div1Reducer,
  div2: div2Reducer,
});

// Create store with combined reducers
const store = Redux.createStore(rootReducer);

// btn events
btn1.addEventListener("click", () => {
    console.log( store.dispatch(expandDiv1()));
  store.dispatch(expandDiv1());
});
btn2.addEventListener("click", () => {
    console.log(store.dispatch(expandDiv2()));
  store.dispatch(expandDiv2());
});
store.subscribe(() => {
  const state = store.getState();
  // Get div widths from state
  div1.style.width = state.div1;
  div2.style.width = state.div2;
});
