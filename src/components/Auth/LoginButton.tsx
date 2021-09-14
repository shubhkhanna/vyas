import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {LightGray_20} from '../../constants/color';

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
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
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
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
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
