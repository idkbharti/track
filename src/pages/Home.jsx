import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Todo from './todo/Todo';
import Exercise from './excercise/Exercise';
import Habit from './habit/screens/Habit';
import Profile from './Profile';
import color from '../design/colorSchema';

const BottomTab = createBottomTabNavigator();

const CustomHeader = ({navigation, route}) => {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        paddingVertical: 5,
        paddingHorizontal: 15,
      }}>
      <View>
        {route.name === 'Profile' ? (
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Text style={{color: color.dark.lightBlue, fontSize: 15}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View>
        <Text
          style={{
            color: 'gray',
            fontSize: 18,
            marginRight: route.name === 'Profile' ? 35 : null,
          }}>
          {route.name}
        </Text>
      </View>

      <View>
        {route.name === 'Profile' ? (
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Icon
              name="settings"
              size={24}
              color="#1D82EA"
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1C1C1E" barStyle="light-content" />

      <BottomTab.Navigator
        screenOptions={({route}) => ({
          header: ({navigation, route}) => (
            <CustomHeader navigation={navigation} route={route} />
          ),
          tabBarStyle: {
            height: 70,
            borderTopWidth: 0,
            paddingBottom: 5,
            backgroundColor: '#1C1C1E',
            activeTintColor: color.dark.lightBlue,
            inactiveTintColor: '#9B9B9B',
            paddingVertical: 5,
            paddingHorizontal: 15,
          },
        })}>
        <BottomTab.Screen
          name="Todo"
          component={Todo}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="note" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Habit"
          component={Habit}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="loop" size={size} color={color} />
            ),
          }}
        />
        {/* <BottomTab.Screen
          name="Exercise"
          component={Exercise}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="heart" size={size} color={color} />
            ),
          }}
        /> */}
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.dark.primary,
  },
  icon: {
    marginRight: 10,
  },
});

export default HomeScreen;
