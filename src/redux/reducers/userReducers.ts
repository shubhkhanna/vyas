import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_ERROR,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from '../constants/userConstants';
import {userLoginInitialState, userProfileInitialState} from '../states';
import {UserLoginAction, UserProfileAction} from '../types';

export const userLoginReducer = (
  state = userLoginInitialState,
  action: UserLoginAction,
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userToken: action.payload,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userProfileReducer = (
  state = userProfileInitialState,
  action: UserProfileAction,
) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          id: action.payload?.user.id,
          name: action.payload?.user.name,
          email: action.payload?.user.email,
          isAdmin: action.payload?.user.isAdmin,
          isVerified: action.payload?.user.isVerified,
        },
      };
    case USER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};