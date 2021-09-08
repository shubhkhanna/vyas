import React from 'react';
import {SafeAreaView} from 'react-native';
import {White} from '../../constants/color';

type AppViewProps = {
  children: React.ReactNode;
};

export default function AppView({children}: AppViewProps) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: White}}>
      {children}
    </SafeAreaView>
  );
}
