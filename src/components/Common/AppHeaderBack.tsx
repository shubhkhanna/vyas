import React from 'react';
import {Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {Black, White} from '../../constants/color';

export default function AppHeaderBack() {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{backgroundColor: White}}
      onPress={() => navigation.goBack()}>
      <IonIcons
        name="ios-arrow-back"
        size={scale(22)}
        color={Black}
        style={{marginTop: scale(15), marginLeft: scale(10)}}
      />
    </Pressable>
  );
}
