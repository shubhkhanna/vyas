import React from 'react';
import {Text, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {LightGray, Blue} from '../../constants/color';

type TabIconProps = {
  focused: boolean;
  icon: string;
  title: string;
};

export default function TabIcon({focused, icon, title}: TabIconProps) {
  return (
    <View style={styles.container}>
      <Feather
        name={icon}
        size={scale(15)}
        color={focused ? Blue : LightGray}
      />

      <Text style={[styles.title, {color: focused ? Blue : LightGray}]}>
        {title}
      </Text>

      {focused && <View style={styles.activeTab} />}
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50@s',
    width: '45@s',
  },
  title: {
    marginVertical: '2@s',
    fontSize: '10@s',
  },
  activeTab: {
    backgroundColor: Blue,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '5@s',
    borderTopLeftRadius: '5@s',
    borderTopRightRadius: '5@s',
  },
});
