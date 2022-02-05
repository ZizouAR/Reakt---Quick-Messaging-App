import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// Screens
import Groups from '../../screens/GroupsScreen';
import RecentMessagesListScreen from '../../screens/RecentMessagesListScreen';
import Settings from '../../screens/SettingsScreen';
import Contacts from '../../screens/ContactsScreen';
import Scan from '../../screens/Scan';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Chat') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'chatbubble-sharp'
                      : 'chatbubble-outline'
                  }
                  size={size}
                  color={color}
                />
              );


            } else if (route.name === 'Groups') {
              return (
                <MaterialCommunityIcons
                  name={focused ? 'account-group': 'account-group-outline'}
                  size={size}
                  color={color}
                />
              );
            }

            else if (route.name === 'Contacts') {
              return (
                <MaterialCommunityIcons
                  name={focused ? 'contacts': 'contacts-outline'}
                  size={size}
                  color={color}
                />
              );
            }

            else if (route.name === 'Scan') {
              return (
                <Ionicons
                  name={focused ? 'ios-scan-circle': 'ios-scan-circle-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#006AFF',
        })}
      >
        <Tab.Screen
          name="Chat"
          component={RecentMessagesListScreen}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
}
