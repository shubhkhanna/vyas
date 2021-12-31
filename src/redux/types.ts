import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_ERROR,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from './constants/userConstants';

// Compare this snippet from src\redux\actions\userActions.ts

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
