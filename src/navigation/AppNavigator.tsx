import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WatchListScreen from '../screens/WatchListScreen';
import TabIcon from '../components/Tabs/TabIcon';
import {ScaledSheet} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarContainer,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon="home" title="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon="search" title="Search" />
          ),
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon="heart" title="Watchlist" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon="user" title="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = ScaledSheet.create({
  tabBarContainer: {
    backgroundColor: '#fff',
    borderTopColor: 'transparent',
    elevation: 0,
    height: '50@s',
  },
});
