import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, StyleSheet, View} from 'react-native';
import Main from './Main.jsx';
import Home from './src/pages/Home.jsx';
import Setting from './src/pages/Setting.jsx';
import Profile from './src/pages/Profile.jsx';
import color from './src/design/colorSchema';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Main"
            options={{
              headerShown: false,
            }}
            component={Main}
          />
          <Stack.Screen
            name="Setting"
            options={{
              headerShown: false,
            }}
            component={Setting}
          />
          <Stack.Screen
            name="Profile"
            options={{
              headerShown: false,
            }}
            component={Profile}
          />
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={Home}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.dark.primary,
    color: color.dark.text,
  },
});

export default App;
