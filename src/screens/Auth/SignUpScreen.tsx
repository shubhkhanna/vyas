import {useEffect, useState} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WelcomeText from '../../components/Auth/WelcomeText';
import InputLabel from '../../components/Auth/InputLabel';
import Input from '../../components/Auth/Input';
import {Red, White} from '../../constants/color';
import {scale, ScaledSheet} from 'react-native-size-matters';
import AppHeaderBack from '../../components/Common/AppHeaderBack';
import LoginButton from '../../components/Auth/LoginButton';
import {appNavigator} from '../../navigation/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {signUpValidationSchema} from '../../helpers/validationSchema';
import {SignUpUser} from '../../redux/actions/userActions';

export default function SignUpScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  // Dispatch SignUpUser action
  const handleSignUp = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    const {name, email, password} = values;

    dispatch(SignUpUser(name, email, password));
  };

  // Get user profile from redux store
  const {user} = useSelector(
    // @ts-ignore
    (state: IUserProfileState) => state.userProfile,
  );

  // @ts-ignore
  const {error} = useSelector(state => state.userSignUp);

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
        <AppHeaderBack onPress={() => navigation.goBack()} />
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
            titleText="Create an account"
            descText="Start your career with us"
          />

          <Formik
            initialValues={{name: '', email: '', password: ''}}
            validateOnMount={true}
            onSubmit={values => handleSignUp(values)}
            validationSchema={signUpValidationSchema}>
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
                {/* Name Field*/}
                <InputLabel labelText="Name" />
                <Input
                  placeholder="John Doe"
                  value={values.name}
                  onBlur={handleBlur('name')}
                  onChangeText={handleChange('name')}
                />

                {/* Name Field Errors */}
                {errors.name && touched.name && (
                  <Text style={styles.errors}>{errors.name}</Text>
                )}

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
                  placeholder={'\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF'}
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

                {/* Signup Button */}
                <LoginButton
                  title="Continue"
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
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
  },
  errors: {
    color: Red,
    fontSize: '12@s',
    fontWeight: '600',
    marginTop: '5@s',
    marginLeft: '2@s',
  },
});

// <AppView style={{paddingHorizontal: scale(15)}}>
//   {/* Welcome text */}
//   <WelcomeText
//     titleText="Welcome To Vyas!"
//     descText="Get started!"
//     viewStyle={{marginTop: scale(15)}}
//   />

//   {/* Name Field */}
// </AppView>;
