import React, {useState} from 'react';
import {scale, ScaledSheet} from 'react-native-size-matters';
import WelcomeText from '../components/Auth/WelcomeText';
import LoginButton from '../components/Auth/LoginButton';
import AppView from '../components/Common/AppView';
import AppSeperatorWithText from '../components/Common/AppSeperatorWithText';
import FormField from '../components/Auth/FormField';
import ScreenSwitcher from '../components/Auth/ScreenSwitcher';
import {useNavigation} from '@react-navigation/core';
import {forgotPasswordScreen, signUpScreen} from '../navigation/routes';
import {Pressable, Text} from 'react-native';
import {LightGray_80} from '../constants/color';

export default function SignInScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AppView style={{paddingHorizontal: scale(15)}}>
      {/* Welcome text */}
      <WelcomeText
        viewStyle={{marginTop: scale(60)}}
        titleText="Welcome To Vyas!"
        descText="Sign in to your account"
      />

      {/* Email Field */}
      <FormField
        label="Email"
        iconName="mail"
        placeHolder="example@gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Field */}
      <FormField
        label="Password"
        iconName="lock"
        placeHolder="********"
        isPassword={true}
        hideIcon="eye-off"
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <Pressable
        style={styles.forgotPassContainer}
        // @ts-ignore
        onPress={() => navigation.navigate(forgotPasswordScreen)}>
        <Text style={styles.forgotPassText}>Forgot Password?</Text>
      </Pressable>

      {/* Login Button */}
      <LoginButton
        title="Log In"
        onPress={() => console.warn('Email Login!')}
      />

      {/* Screen Switcher */}
      <ScreenSwitcher
        title="Don't have an account?"
        linkText="Sign Up"
        // @ts-ignore
        onPress={() => navigation.navigate(signUpScreen)}
      />

      {/* Seperator */}
      <AppSeperatorWithText text="OR" />

      {/* Login with Google */}
      <LoginButton
        isSocial
        title="Login with Google"
        icon={require('../assets/icons/google.png')}
        onPress={() => console.warn('Google Login!')}
      />
    </AppView>
  );
}

const styles = ScaledSheet.create({
  forgotPassContainer: {
    marginBottom: '20@s',
    marginTop: '-8@s',
  },
  forgotPassText: {
    textAlign: 'right',
    fontSize: '12@s',
    fontWeight: '700',
    color: LightGray_80,
  },
});
