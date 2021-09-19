import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {
  Black,
  Blue,
  LightGray,
  LightGray_20,
  LightGray_80,
} from '../../constants/color';

type FormFieldProps = {
  label: string;
  iconName: string;
  placeHolder: string;
  value: string;
  onChangeText: (value: string) => void;
  isPassword?: boolean;
  hideIcon?: string;
};

export default function FormField({
  label,
  iconName,
  placeHolder,
  value,
  onChangeText,
  isPassword,
  hideIcon,
}: FormFieldProps) {
  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.fieldText}>{label}</Text>

      {/* Field Input  */}
      <View style={styles.fieldInputContainer}>
        {/* Icon */}
        <Feather name={iconName} style={styles.icon} size={scale(16)} />

        {/* Text Input */}
        <TextInput
          style={styles.fieldInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeHolder}
          placeholderTextColor={LightGray}
          secureTextEntry={isPassword ? true : false}
          autoCapitalize="none"
          autoCompleteType="off"
          underlineColorAndroid="transparent"
        />

        {/* Password Viewer Icon */}
        {isPassword ? (
          <Pressable onPress={() => console.log('Hide Password!')}>
            <Feather
              name={hideIcon ?? ''}
              style={[
                styles.icon,
                {marginRight: scale(8), color: LightGray_80},
              ]}
              size={scale(18)}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    marginBottom: '15@s',
  },
  fieldText: {
    fontSize: '12@s',
    fontWeight: 'bold',
    color: Black,
    marginBottom: '8@s',
  },
  fieldInputContainer: {
    flexDirection: 'row',
    borderWidth: '1@s',
    borderColor: LightGray_20,
    borderRadius: '10@s',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '8@s',
    color: Blue,
  },
  fieldInput: {
    flex: 1,
    marginHorizontal: '8@s',
    color: Black,
    fontSize: '15@s',
  },
});
