import { store } from "../store";
/*
*   Action Types
*/
export const SLIDE_CONTENT = 'SLIDE_CONTENT';


/*
*   Action Creators
*    returns the required action (object with type (required) and payload)
*    when action is dispatched from the store, the action object will then flow through the reducer
*/
export function changeDisplayable(dir){
  return { type: SLIDE_CONTENT, payload: dir };
}


  //this function returns an integer representing the index of the last content displayed
  // or -1 if it is not displayed
const checkIfEndOfSlide = (displayedIndices, contentLen) => {
  console.log(`checkIfEndOfSlide`);
    var maxIndex = Math.max(...displayedIndices);
    return maxIndex == contentLen-1 ? maxIndex : -1;
  }

  //this function returns an integer representing the index of the start content displayed
  // or -1 if it is not displayed
const checkIfStartOfSlide = (displayedIndices) => {
  var minIndex = Math.min(...displayedIndices);
  return minIndex == 0 ? minIndex  : -1;
}

// this function handles the onclick events for the next and back arrows for the carousel
//  arg: string value of either "next" or "back"
export function navigateSlide(dir, displayed, content){
  console.log(`navigateSlide`);
    var contentLen = content.length;
    //return if 3 or less content dislayed
    if(contentLen <= 3 ) { return; }
    var displayable = displayed;
    var newIndices;

    if(dir==="next"){
      var lastContentDisplayed = checkIfEndOfSlide(displayable, contentLen);
      newIndices = displayable.map((item, index) => {
        if(lastContentDisplayed > -1){
          //content at end of slide [content.length-1]
          return lastContentDisplayed == item ? 0 : ++item;
        }else{
          return ++item;
        }
      });
    }else if(dir==="back"){
      var firstContentDisplayed = checkIfStartOfSlide(displayable);
      newIndices = displayable.map((item, index) => {
        if(firstContentDisplayed > -1){
          //content at index 0 of content[] is displayed
          return firstContentDisplayed == item ? contentLen-1 : --item;
        }else{
          return --item;
        }
      });
    }
    store.dispatch({ type: SLIDE_CONTENT, payload: newIndices });
  }

//export const changeDisplayable = dir => ({ type: "SLIDE_CONTENT", payload: dir });
