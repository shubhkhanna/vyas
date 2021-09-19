import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Black, LightGray} from '../../constants/color';

type WelcomeTextProps = {
  titleText: string;
  descText: string;
};

export default function WelcomeText({titleText, descText}: WelcomeTextProps) {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.titleText}>{titleText}</Text>

      {/* SubTitle */}
      <Text style={styles.descText}>{descText}</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    marginTop: '60@s',
  },
  titleText: {
    color: Black,
    fontSize: '24@s',
    fontWeight: '700',
    marginBottom: '5@s',
  },
  descText: {
    color: LightGray,
    fontSize: '16@s',
    marginBottom: '40@s',
  },
});
