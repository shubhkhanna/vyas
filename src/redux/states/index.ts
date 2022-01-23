// Compare this snippet from src\redux\reducers\userReducer.ts:

// User SignUp State type
export interface IUserSignUpState {
  loading: boolean;
  userToken: string | null;
  error: string | null;
}

// User SignUp Initial State
export const userSignUpInitialState: IUserSignUpState = {
  loading: false,
  userToken: null,
  error: null,
};

// User Login State type
export interface IUserLoginState {
  loading: boolean;
  userToken: string | null;
  error: string | null;
}

// User Login Initial State
export const userLoginInitialState: IUserLoginState = {
  loading: false,
  userToken: null,
  error: null,
};

// User Profile State type
export interface IUserProfileState {
  loading: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    isVerified: boolean;
  };
  error: string | null;
}

// User Profile Initial State
export const userProfileInitialState: IUserProfileState = {
  loading: false,
  user: {
    id: '',
    name: '',
    email: '',
    isAdmin: false,
    isVerified: false,
  },
  error: null,
};
