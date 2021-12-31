import {Text, Image, Pressable, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {
  Blue,
  Gray,
  Gray_20,
  LightGray,
  LightGray_20,
  White,
} from '../../constants/color';

type LoginButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  isSocial?: boolean;
  icon?: any;
};

export default function LoginButton({
  title,
  onPress,
  disabled,
  isSocial,
  icon,
}: LoginButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          marginTop: isSocial ? scale(0) : scale(15),
          borderColor: isSocial ? LightGray_20 : 'transparent',
          backgroundColor: isSocial ? Gray_20 : disabled ? Gray : Blue,
          padding: isSocial ? scale(8) : scale(10),
        },
      ]}>
      {/* Social icon */}
      {isSocial && (
        <Image
          source={icon}
          style={{
            marginLeft: scale(10),
            marginRight: scale(-25),
            width: scale(25),
            height: scale(25),
          }}
        />
      )}

      {/* Button text */}
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={[
            styles.titleText,
            {
              color: isSocial ? LightGray : White,
              fontWeight: isSocial ? 'bold' : 'normal',
            },
          ]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8@s',
  },
  titleText: {
    fontSize: '14@s',
  },
});
