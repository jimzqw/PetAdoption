import {combineReducers} from 'redux';
import {UPDATE_MAX, UPDATE_MIN, UPDATE_SWITCH, UPDATE_PROFILE} from '../actions/types';

const INITIAL_STATE = {
  animalToggle: false,
  ageMin: '0',
  ageMax: '0',
  profile: ''
};

const petReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MIN:
      return {...state, ageMin: action.payload};
    case UPDATE_MAX:
      return {...state, ageMax: action.payload};
    case UPDATE_SWITCH:
      return {...state, animalToggle: action.payload};
      case UPDATE_PROFILE:
      return {...state, profile: action.payload};
    default:
      return state;
  }
};

export default combineReducers({
  filter: petReducer
});

