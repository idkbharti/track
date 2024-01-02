import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {FlatList} from 'react-native-gesture-handler';
import color from '../../design/colorSchema';

const StreakGoal = () => {
  const goal = ['None', 'Daily', 'Week', 'Month'];
    const [selectedOption, setSelectedOption] = useState('None');

    // const handleSelectOption = item => {
    //   setSelectedOption(item);
    // };

  const handleSelectIcon = selectedItem => {
    // Replace this placeholder function with your actual logic
    console.log(`Selected: ${selectedItem}`);
  };

  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        backgroundColor: color.dark.primary,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: color.dark.primary,
          justifyContent: 'space-between',
        }}>
        <Icon name="arrow-left" size={20} color={color.dark.gray} />
        <Text>Streak Goal</Text>
        <Icon name="close" size={20} color={color.dark.gray} />
      </View>
      <Text
        style={{
          marginLeft: 8,
          color: color.dark.gray,
          marginTop: 4,
          fontSize: 12,
        }}>
        Interval
      </Text>
      <FlatList
        style={{flexDirection: 'column'}}
        data={goal}
        numColumns={8}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => handleSelectIcon(item)}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: color.dark.secondary, // Set a specific color for the circle
                justifyContent: 'space-around',
                padding:8,
                borderRadius:8,
                gap:5,
                alignItems: 'center',
              }}>
              <Text style={{color: color.dark.gray}}>{item}</Text>
              {selectedOption === item && (
                <Icon name="check" size={22} color={color.dark.blue} />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default StreakGoal;
