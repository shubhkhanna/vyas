import {Text, TextStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Black} from '../../constants/color';

type InputLabelProps = {
  labelText: string;
  labelStyle?: TextStyle;
};

export default function InputLabel({labelText, labelStyle}: InputLabelProps) {
  return <Text style={[styles.label, labelStyle]}>{labelText}</Text>;
}

const styles = ScaledSheet.create({
  label: {
    color: Black,
    fontSize: '13@s',
    fontWeight: 'bold',
    marginLeft: '2@s',
    marginVertical: '5@s',
  },
});
