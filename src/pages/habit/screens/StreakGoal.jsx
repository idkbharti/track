import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {FlatList} from 'react-native-gesture-handler';
import color from '../../../design/colorSchema';

const StreakGoal = ({
  selectedOption,
  setSelectedOption,
  setStreakGoalModalVisible,
}) => {
  const goal = ['None', 'Daily', 'Week', 'Month'];

  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        backgroundColor: color.dark.primary,
        padding: 20,
        borderRadius: 5,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: color.dark.primary,
          justifyContent: 'space-between',
          gap: 60,
        }}>
        <TouchableOpacity onPress={()=>setStreakGoalModalVisible(false)}>
          <Icon name="arrow-left" size={20} color={color.dark.gray} />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 20}}>Streak Goal</Text>
        <TouchableOpacity onPress={()=>setStreakGoalModalVisible(false)}>
          <Icon name="close" size={20} color={color.dark.gray} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginLeft: 8,
          color: color.dark.gray,
          marginTop: 10,
          fontSize: 16,
        }}>
        Interval
      </Text>

      <FlatList
        style={{flex: 1, flexDirection: 'row'}}
        data={goal}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => {setSelectedOption(item)
            setStreakGoalModalVisible(false)
          }
            }>
            <View
              style={{
                justifyContent: 'end',
                padding: 8,
                borderRadius: 8,
                gap: 5,
                flex: 1,
                flexDirection: 'row',
                gap: 100,
              }}>
              <Text style={{color: 'gray', fontSize: 15}}>{item}</Text>
              {selectedOption === item ? (
                <Text style={{color: 'gray'}}>✓</Text> // Placeholder for your checkbox icon
              ) : (
                <Text></Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default StreakGoal;
