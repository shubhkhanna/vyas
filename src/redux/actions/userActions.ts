import {Dispatch} from 'react';
import axios from '../../helpers/axiosInstance';
import {getUserData} from '../../helpers/getUserData';
import {putUserData} from '../../helpers/putUserData';
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
} from '../constants/userConstants';
import {UserLoginAction, UserProfileAction, UserSignUpAction} from '../types';

export const SignUpUser =
  (name: string, email: string, password: string) =>
  async (dispatch: Dispatch<UserSignUpAction>) => {
    try {
      dispatch({type: USER_SIGNUP_REQUEST});

      const config = {
        headers: {'Content-Type': 'application/json'},
      };

      const {data} = await axios.post(
        '/user/register',
        {name, email, password},
        config,
      );

      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: data?.token,
      });

      await putUserData('@token', data?.token);

      // @ts-ignore
      dispatch(GetUserProfile());
    } catch (error: any) {
      console.log(error.response.data.message);
      dispatch({
        type: USER_SIGNUP_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const LoginUser =
  (email: String, password: String) =>
  async (dispatch: Dispatch<UserLoginAction>) => {
    try {
      dispatch({type: USER_LOGIN_REQUEST});

      const config = {
        headers: {'Content-Type': 'application/json'},
      };

      const {data} = await axios.post('/user/login', {email, password}, config);

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data?.token,
      });

      await putUserData('@token', data?.token);

      // @ts-ignore
      dispatch(GetUserProfile());
    } catch (error: any) {
      console.log(error.response.data.message);
      dispatch({
        type: USER_LOGIN_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const GetUserProfile =
  () => async (dispatch: Dispatch<UserProfileAction>) => {
    try {
      dispatch({type: USER_PROFILE_REQUEST});

      const token = await getUserData('@token');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
      };

      const {data} = await axios.get('/user/profile', config);

      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: {
          user: {
            id: data?.user.id,
            name: data?.user.name,
            email: data?.user.email,
            isAdmin: data?.user.isAdmin,
            isVerified: data?.user.isVerified,
          },
        },
      });
    } catch (error: any) {
      console.log(error.response.data.message);
      dispatch({
        type: USER_PROFILE_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
