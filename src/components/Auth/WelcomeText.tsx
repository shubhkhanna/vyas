import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Black, LightGray} from '../../constants/color';

type WelcomeTextProps = {
  titleText: string;
  descText: string;
  viewStyle?: ViewStyle;
};

export default function WelcomeText({
  titleText,
  descText,
  viewStyle,
}: WelcomeTextProps) {
  return (
    <View style={viewStyle}>
      {/* Title */}
      <Text style={styles.titleText}>{titleText}</Text>

      {/* SubTitle */}
      <Text style={styles.descText}>{descText}</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  titleText: {
    color: Black,
    fontSize: '24@s',
    fontWeight: '700',
    marginBottom: '5@s',
  },
  descText: {
    color: LightGray,
    fontSize: '15@s',
    marginBottom: '10@s',
  },
});
