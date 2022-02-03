import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import MessageScreen from '../../screens/MessageScreen';
import RecentMessagesListScreen from '../../screens/RecentMessagesListScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={RecentMessagesListScreen} />
      <Tab.Screen name="Settings" component={RecentMessagesListScreen} />
    </Tab.Navigator>
  );
}
