import AsyncStorage from '@react-native-async-storage/async-storage';

export const putUserData = async (
  key: string,
  value: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
