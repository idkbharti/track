import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import user from '../assets/profile-user.png';
import Styles from '../design/style';
import color from '../design/colorSchema';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            flex: 0.3,
            backgroundColor: color.dark.text,
            width: 90,
            height: 90,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={user} style={{width: 80, height: 80}}></Image>
        </View>
        <View style={{flex: 0.7, flexDirection: 'column'}}>
          <View>
            <Text
              style={{
                color: color.dark.text,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {'Hi User!'}
            </Text>
          </View>
          <View style={{flex: 0.7, flexdirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={{color: '#9B9B9B'}}>Workouts</Text>
              <Text style={{color: color.dark.text}}>0</Text>
            </View>
            <View>
              <Text style={{color: '#9B9B9B'}}>Habits</Text>
              <Text style={{color: color.dark.text}}>0</Text>
            </View>
            <View>
              <Text style={{color: '#9B9B9B'}}>Todos</Text>
              <Text style={{color: color.dark.text}}>0</Text>
            </View>
          </View>
        </View>
      </View>

      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default Profile;
