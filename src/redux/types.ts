import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_ERROR,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from './constants/userConstants';

// Compare this snippet from src\redux\actions\userActions.ts

// UserSignUpAction
export type UserSignUpAction = {
  type:
    | typeof USER_SIGNUP_REQUEST
    | typeof USER_SIGNUP_SUCCESS
    | typeof USER_SIGNUP_ERROR;
  payload?: string | null;
};

// UserLoginAction
export type UserLoginAction = {
  type:
    | typeof USER_LOGIN_REQUEST
    | typeof USER_LOGIN_SUCCESS
    | typeof USER_LOGIN_ERROR;
  payload?: string | null;
};

// UserProfileAction
export type UserProfileAction = {
  type:
    | typeof USER_PROFILE_REQUEST
    | typeof USER_PROFILE_SUCCESS
    | typeof USER_PROFILE_ERROR;
  payload?: {
    user: {
      id: string;
      name: string;
      email: string;
      isAdmin: Boolean;
      isVerified: Boolean;
    };
  };
};
