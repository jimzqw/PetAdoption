
import {UPDATE_MAX, UPDATE_MIN, UPDATE_SWITCH, UPDATE_PROFILE} from './types';

export const updateMin = (value) => {
    return {
        type: UPDATE_MIN,
        payload: value
    };   
};

export const updateMax = (value) => {
    return {
        type: UPDATE_MAX,
        payload: value
    };   
};


export const updateSwitch = (value) => {
    return {
        type: UPDATE_SWITCH,
        payload: value
    };   
};


export const updateProfile = (value) => {
    return {
        type: UPDATE_PROFILE,
        payload: value
    };   
};