import {Dispatch} from 'react';
import axios from '../../helpers/axiosInstance';
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_ERROR,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from '../constants/userConstants';
import {UserLoginAction, UserProfileAction} from '../types';

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

      // @ts-ignore
      dispatch(GetUserProfile());
    } catch (error: any) {
      console.log(error.response);
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
  () => async (dispatch: Dispatch<UserProfileAction>, getState: any) => {
    try {
      dispatch({type: USER_PROFILE_REQUEST});

      const {
        userLogin: {userToken},
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
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
      console.log(error.response);
      dispatch({
        type: USER_PROFILE_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
