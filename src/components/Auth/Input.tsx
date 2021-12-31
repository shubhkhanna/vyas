import {ChangeEvent} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {Black, Blue, Gray_20, LightGray_80} from '../../constants/color';
import Feather from 'react-native-vector-icons/Feather';

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  isPassword?: boolean;
  secureTextEntry?: boolean;
  onPress?: () => void;
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  onBlur,
  isPassword,
  secureTextEntry,
  onPress,
}: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCompleteType="off"
        placeholder={placeholder}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={LightGray_80}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
        returnKeyType="done"
        clearButtonMode="while-editing"
        secureTextEntry={secureTextEntry}
      />

      {/* Password Hide Icon */}
      {isPassword && value.length > 0 && (
        <Pressable onPress={onPress}>
          <Feather
            name={secureTextEntry ? 'eye' : 'eye-off'}
            style={styles.icon}
            size={scale(16)}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = ScaledSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Gray_20,
    borderRadius: '8@s',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginHorizontal: '8@s',
    color: Black,
    fontSize: '14@s',
    paddingVertical: '8@s',
  },
  icon: {
    color: Blue,
    marginRight: '15@s',
  },
});
