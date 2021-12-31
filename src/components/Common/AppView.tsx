import {SafeAreaView, ViewStyle} from 'react-native';
import {White} from '../../constants/color';

type AppViewProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function AppView({children, style}: AppViewProps) {
  return (
    <SafeAreaView style={[style, {flex: 1, backgroundColor: White}]}>
      {children}
    </SafeAreaView>
  );
}
