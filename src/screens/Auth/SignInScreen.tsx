import {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import WelcomeText from '../../components/Auth/WelcomeText';
import {Blue, Red, White} from '../../constants/color';
import {signInValidationSchema} from '../../helpers/validationSchema';
import InputLabel from '../../components/Auth/InputLabel';
import Input from '../../components/Auth/Input';
import {
  appNavigator,
  forgotPasswordScreen,
  signUpScreen,
} from '../../navigation/routes';
import LoginButton from '../../components/Auth/LoginButton';
import ScreenSwitcher from '../../components/Auth/ScreenSwitcher';
import AppSeperatorWithText from '../../components/Common/AppSeperatorWithText';
import {useDispatch, useSelector} from 'react-redux';
import {LoginUser} from '../../redux/actions/userActions';
import {IUserProfileState} from '../../redux/states';

export default function SignInScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  // Dispatch LoginUser action
  const handleLogin = (values: {email: string; password: string}) => {
    const {email, password} = values;

    dispatch(LoginUser(email, password));
  };

  // Get user profile from redux store
  const {user} = useSelector(
    // @ts-ignore
    (state: IUserProfileState) => state.userProfile,
  );

  // @ts-ignore
  const {error} = useSelector(state => state.userLogin);

  useEffect(() => {
    if (user.email) {
      navigation.reset({
        index: 0,
        routes: [{name: appNavigator}],
      });
    }
  }, [user, error]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1, backgroundColor: White}}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: scale(20)}}>
        <View style={styles.container}>
          {/* Image */}
          <Image
            source={require('../../assets/img/signin.png')}
            style={styles.image}
            resizeMode="cover"
          />

          {/* Welcome Text */}
          <WelcomeText
            viewStyle={{alignItems: 'center'}}
            titleText="Welcome To Vyas!"
            descText="Sign in to your account"
          />

          <Formik
            initialValues={{email: '', password: ''}}
            validateOnMount={true}
            onSubmit={values => handleLogin(values)}
            validationSchema={signInValidationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid,
            }) => (
              <>
                {/* Email Field */}
                <InputLabel labelText="Email" />
                <Input
                  placeholder="john@gmail.com"
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                />

                {/* Email Field Errors */}
                {errors.email && touched.email && (
                  <Text style={styles.errors}>{errors.email}</Text>
                )}

                {/* Password Field */}
                <InputLabel labelText="Password" />
                <Input
                  placeholder="joHn@1234"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  isPassword={true}
                  secureTextEntry={!showPassword}
                  onPress={() => setShowPassword(!showPassword)}
                />

                {/* Password Field Errors */}
                {errors.password && touched.password && (
                  <Text style={styles.errors}>{errors.password}</Text>
                )}

                {/* Forgot Password */}
                <Pressable
                  style={styles.forgotPassContainer}
                  onPress={() => navigation.navigate(forgotPasswordScreen)}>
                  <Text style={styles.forgotPassText}>Forgot Password?</Text>
                </Pressable>

                {/* Login Button */}
                <LoginButton
                  title="Login"
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>

          {/* Seperator */}
          <AppSeperatorWithText text="OR" />

          {/* Login with Google */}
          <LoginButton
            isSocial
            title="Login with Google"
            icon={require('../../assets/icons/google.png')}
            onPress={() => console.warn('Google Login!')}
          />

          {/* Screen Switcher */}
          <ScreenSwitcher
            title="New to Vyas?"
            linkText="Register"
            onPress={() => navigation.navigate(signUpScreen)}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '15@s',
  },
  image: {
    width: '160@s',
    height: '160@s',
    alignSelf: 'center',
    marginTop: '5@s',
  },
  errors: {
    color: Red,
    fontSize: '12@s',
    fontWeight: '600',
    marginTop: '5@s',
    marginLeft: '2@s',
  },
  forgotPassContainer: {
    marginTop: '10@s',
  },
  forgotPassText: {
    textAlign: 'right',
    fontSize: '12@s',
    fontWeight: '700',
    color: Blue,
  },
});
