import {useState} from 'react';
import {scale} from 'react-native-size-matters';
import WelcomeText from '../components/Auth/WelcomeText';
import LoginButton from '../components/Auth/LoginButton';
import AppView from '../components/Common/AppView';
import AppSeperatorWithText from '../components/Common/AppSeperatorWithText';
import FormField from '../components/Auth/FormField';
import ScreenSwitcher from '../components/Auth/ScreenSwitcher';
import {useNavigation} from '@react-navigation/core';
import AppHeaderBack from '../components/Common/AppHeaderBack';

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <AppHeaderBack />

      <AppView style={{paddingHorizontal: scale(15)}}>
        {/* Welcome text */}
        <WelcomeText
          titleText="Welcome To Vyas!"
          descText="Get started!"
          viewStyle={{marginTop: scale(15)}}
        />

        {/* Name Field */}
        <FormField
          label="Full Name"
          iconName="user"
          placeHolder="john doe"
          value={name}
          onChangeText={setName}
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

        {/* Login Button */}
        <LoginButton
          title="Sign Up"
          onPress={() => console.warn('Email Sign Up!')}
        />

        {/* Screen Switcher */}
        <ScreenSwitcher
          title="Already have an account?"
          linkText="Sign In"
          // @ts-ignore
          onPress={() => navigation.goBack()}
        />

        {/* Seperator */}
        <AppSeperatorWithText text="OR" />

        {/* Login with Google */}
        <LoginButton
          isSocial
          title="Sign up with Google"
          icon={require('../assets/icons/google.png')}
          onPress={() => console.warn('Google Sign Up!')}
        />
      </AppView>
    </>
  );
}
