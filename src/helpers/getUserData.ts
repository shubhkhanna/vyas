import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserData = async (key: string): Promise<string | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key as string);

    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};
