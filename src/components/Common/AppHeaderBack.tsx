import {View, Text} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import {Black, White} from '../../constants/color';

type HeaderBackProps = {
  onPress: () => void;
  title?: string;
};

const AppHeaderBack = ({onPress, title}: HeaderBackProps) => {
  return (
    <View style={styles.container}>
      <Icon
        name="ios-chevron-back"
        size={scale(26)}
        color={Black}
        onPress={onPress}
      />

      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default AppHeaderBack;

const styles = ScaledSheet.create({
  container: {
    padding: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: White,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: '16@s',
    color: Black,
    marginLeft: '-25@s',
  },
});
