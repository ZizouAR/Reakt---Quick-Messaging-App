import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createStackNavigator } from '@react-navigation/stack'; const Stack = createStackNavigator();
import { useGlobal, setGlobal } from 'reactn';
import { LogBox } from 'react-native';

// Components
import BottomNavigator from './src/components/navigator/BottomNavigator';

// Screens
import Groups from './src/screens/Groups';
import Conversation from './src/screens/Conversation';
import Login from './src/screens/Auth/Login'
import FingerPrint from './src/screens/Auth/FingerPrint'
import PhoneNumber from './src/screens/Auth/PhoneNumber'
import SMSVerification from './src/screens/Auth/SMSVerification'
import Welcome from './src/screens/Auth/Welcome'
import Feed from './src/screens/Feed'
import Events from './src/screens/Events'
import Tasks from './src/screens/Tasks'


// Data
import defaultContacts from './src/data/contacts.json';

export default function App() {
  const scheme = useColorScheme();
  const [ loaded, setLoaded ] = useState(false);
  const [ contacts ] = useGlobal<any>('contacts');

  useEffect(() => {
    if(!contacts){
      setGlobal({
        contacts: defaultContacts
      })
    }

    setLoaded(true)
  }, [])


//LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notification

  const iOSLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#0071e3",
      text: "#000",
      text2: "#999",
      border: "#EAEAEA",
      background: "#f3f3f3",
      card: "#fff"
    }
  }
  
  const iOSDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "#0071e3",
      text: "#FFF",
      text2: "#999",
      border: "#111",
      background: "#222",
      card: "#000"
    }
  }

  if(loaded){
    return (
      <>
        <StatusBar barStyle={scheme === "dark" ? 'light-content' : "dark-content"}/>
        <AppearanceProvider>
          <NavigationContainer theme={scheme === "dark" ? iOSDarkTheme : iOSLightTheme}>
            <Stack.Navigator initialRouteName="FingerPrint">
              
              {/* Logged-in stack */}
              <Stack.Screen name="Message" component={Conversation} options={{ headerShown: false }}/>
              <Stack.Screen name="Groups" component={Groups}/>
              <Stack.Screen name="Home" component={BottomNavigator} options={{ headerShown: false }}/>
              <Stack.Screen name="Feed" component={Feed}/>
              <Stack.Screen name="Events" component={Events}/>
              <Stack.Screen name="Tasks" component={Tasks}/>

              {/* Logged-out stack */}
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
              <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
              <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ headerShown: false }}/>
              <Stack.Screen name="FingerPrint" component={FingerPrint} options={{ headerShown: false }}/>
              <Stack.Screen name="SMSVerification" component={SMSVerification} options={{ headerShown: false }}/>
            </Stack.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      </>
    );
  } else return null;
}