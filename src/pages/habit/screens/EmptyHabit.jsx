import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import color from '../../../design/colorSchema';

const EmptyHabit = ({setState}) => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    // navigation.navigate('Home');
    setState('create');
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}>
      <Icon name="plus" size={24} color={color.dark.lightBlue} />
      <Text style={{fontSize: 20}}>No Habit Found</Text>
      <Text>Create a new habit to track your progress</Text>
      <TouchableOpacity
        onPress={handleButtonPress}
        style={{
          borderRadius: 20,
          backgroundColor: color.dark.lightBlue,
          padding: 10,
        }}>
        <View style={{fontSize: 17}}>
          <Text>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyHabit;
