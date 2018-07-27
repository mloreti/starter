import { ActionTypes } from '../../actions/sampleActions';

const sampleInitialState = {
  text: 'hello world'
}

const sampleReducer = (state = sampleInitialState, action: ActionTypes) => {
  switch(action.type) {
    case 'SAMPLE_ACTION':
      return state;
    default:
      return state;
  }
}

export default sampleReducer;