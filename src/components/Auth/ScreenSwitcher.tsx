import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {Blue, LightGray} from '../../constants/color';

type ScreenSwitcherProps = {
  title: string;
  linkText: string;
  onPress: () => void;
};

export default function ScreenSwitcher({
  title,
  linkText,
  onPress,
}: ScreenSwitcherProps) {
  return (
    <View style={styles.container}>
      {/* Link description */}
      <Text style={styles.titleText}>{title}</Text>

      {/* Link Text */}
      <Pressable onPress={onPress}>
        <Text
          style={[
            styles.titleText,
            {fontWeight: 'bold', color: Blue, marginLeft: scale(5)},
          ]}>
          {linkText}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '15@s',
  },
  titleText: {
    fontSize: '12@s',
    color: LightGray,
    fontWeight: 'bold',
  },
});
