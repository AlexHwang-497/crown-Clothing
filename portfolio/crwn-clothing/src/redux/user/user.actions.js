// *creates our action creator functions
// * they are literally functions that return objects
import { UserActionTypes } from './user.types';
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
  });