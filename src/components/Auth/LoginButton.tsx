import React from 'react';
import {Text, Image, Pressable} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {Black, Blue, LightGray_20, White} from '../../constants/color';

type LoginButtonProps = {
  title: string;
  onPress: () => void;
  isSocial?: boolean;
  icon?: any;
};

export default function LoginButton({
  title,
  onPress,
  isSocial,
  icon,
}: LoginButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          borderColor: isSocial ? LightGray_20 : 'transparent',
          backgroundColor: isSocial ? 'transparent' : Blue,
          padding: isSocial ? scale(8) : scale(10),
        },
      ]}>
      {/* Social icon */}
      {isSocial && (
        <Image
          source={icon}
          style={{
            marginRight: scale(10),
            width: scale(25),
            height: scale(25),
          }}
        />
      )}

      {/* Button text */}
      <Text style={[styles.titleText, {color: isSocial ? Black : White}]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    padding: '8@s',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10@s',
    borderColor: LightGray_20,
    marginBottom: '20@s',
  },
  titleText: {
    fontSize: '14@s',
  },
});
