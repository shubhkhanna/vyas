import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {LightGray_20, LightGray_80} from '../../constants/color';

type AppSeperatorWithTextProps = {
  text: string;
};

export default function AppSeperatorWithText({
  text,
}: AppSeperatorWithTextProps) {
  return (
    <View style={styles.container}>
      {/*Left Line */}
      <View style={styles.leftLine} />

      {/* Seperator Text */}
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>

      {/* Right Line */}
      <View style={styles.rightLine} />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20@s',
  },
  leftLine: {
    flex: 1,
    height: 1,
    backgroundColor: LightGray_20,
  },
  text: {
    width: 'auto',
    fontSize: '14@s',
    textAlign: 'center',
    color: LightGray_80,
    marginHorizontal: '10@s',
  },
  rightLine: {
    flex: 1,
    height: 1,
    backgroundColor: LightGray_20,
  },
});
