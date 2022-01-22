import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/App/HomeScreen';
import SearchScreen from '../screens/App/SearchScreen';
import ProfileScreen from '../screens/App/ProfileScreen';
import WishListScreen from '../screens/App/WishListScreen';
import TabIcon from '../components/Tabs/TabIcon';
import {ScaledSheet} from 'react-native-size-matters';
import {
  homeScreen,
  profileScreen,
  searchScreen,
  wishlistScreen,
} from './routes';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={homeScreen}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarContainer,
      }}>
      <Tab.Screen
        name={homeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon="home" title="Home" />
          ),
        }}
      />
      <Tab.Screen
        name={searchScreen}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon="search" title="Search" />
          ),
        }}
      />
      <Tab.Screen
        name={wishlistScreen}
        component={WishListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon="heart" title="Wishlist" />
          ),
        }}
      />
      <Tab.Screen
        name={profileScreen}
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
