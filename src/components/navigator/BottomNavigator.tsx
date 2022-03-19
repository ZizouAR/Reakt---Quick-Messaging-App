import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Text, Platform } from 'react-native';
import { h, w } from "../../config/dimensions";

// Screens
import Groups from '../../screens/Groups';
import RecentMessagesList from '../../screens/RecentMessagesList';
import Contacts from '../../screens/Contacts';
//import Scan from '../../screens/Scan';
import Tasks from '../../screens/Tasks';
import AppStyles from '../../config/styles';


export const tabBarStyle = {
  bottom: 3.1 * h,
  marginLeft: 5.3 * w,
  marginRight: 5.3 * w,
  elevation: 0,
  borderRadius: 15,
  height: 11.1 * h,
  position: 'absolute', 
  paddingHorizontal: "5%",
  paddingVertical: Platform.OS === 'ios' ? "7%" : null,
  backgroundColor: AppStyles.colors.lightBleu
}


const Tab = createBottomTabNavigator();


export default function BottomNavigator(props: any) {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          size = 30
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
                name={focused ? 'account-group' : 'account-group-outline'}
                size={size + 3}
                color={color}
              />
            );
          }

          else if (route.name === 'Contacts') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'contacts' : 'contacts-outline'}
                size={size - 3}
                color={color}
              />
            );
          }

          /*
          else if (route.name === 'Scan') {
            return (
              <Ionicons
                name={focused ? 'ios-scan-circle' : 'ios-scan-circle-outline'}
                size={size + 2}
                color={color}
              />
            );
          }
*/

          else if (route.name === 'Tasks') {
            return (
              <Ionicons
                name={focused ? 'list-circle' : 'list-circle-outline'}
                size={size+2}
                color={color}
              />
            );
          }

        },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: AppStyles.colors.bleu,
        tabBarLabel: ({ focused }) => {
          let label;
          return label = focused ? <Text style={{ fontSize: 10, color: AppStyles.colors.bleu }}>{route.name}</Text> : null
        },

        tabBarStyle: {
          ...tabBarStyle
        }
      })}
    >
      {/*<SegmentedControl/>*/}
      <Tab.Screen
        name="Chat"
        component={RecentMessagesList}
        options={{ tabBarBadge: 3, tabBarBadgeStyle: { marginTop: Platform.OS === 'ios' ? 0 : "25%" } }}
      />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Contacts" component={Contacts} />
      {/*<Tab.Screen name="Scan" component={Scan} options={{ headerShown: false }} />*/}
      <Tab.Screen name="Tasks" component={Tasks} />
    </Tab.Navigator>
  );
}
