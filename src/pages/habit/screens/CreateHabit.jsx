import {View, Text, Button, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import React, {useState} from 'react';
import color from '../../../design/colorSchema';
import Input from '../../../components/Input';
import InputButton from '../../../components/InputButton';
import {FlatList} from 'react-native-gesture-handler';
import Icons from '../icons';
import StreakGoal from './StreakGoal';
import colorsPalette from '../colorsPalette';

const CreateHabit = () => {
  const [title, setTitle] = useState('');
  const [desc, setDes] = useState('');
  const [completion, setCompletion] = useState(1);
  const [streakGoalModalVisible, setStreakGoalModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('None');
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleSelectIcon = icon => {
    setSelectedIcon(icon);
  };

  const handleModal = () => {
    setStreakGoalModalVisible(true);
  };

  return (
    <View style={{position: 'relative'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="close" size={20} color={color.dark.gray} />
          <Text style={{color: color.dark.gray, marginLeft: 20, fontSize: 17}}>
            New Habit
          </Text>
        </View>
        <View>
          <Icon name="check" size={20} color={color.dark.gray} />
        </View>
      </View>
      <Input label="Name" text={title} setText={setTitle} />
      <Input label="Description" text={desc} setText={setDes} />
      <View style={{flexDirection: 'row'}}>
        <InputButton
          label="Streak Goal"
          selectedOptions={selectedOption}
          icon="arrow-right"
          handleOption={handleModal}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={streakGoalModalVisible}
          onRequestClose={() => {
            setStreakGoalModalVisible(false);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            }}>
            <StreakGoal
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              setStreakGoalModalVisible={setStreakGoalModalVisible}
            />
          </View>
        </Modal>

        <InputButton
          label="Remainder"
          selectedOptions="None"
          icon="arrow-right"
          handleOptions={() => {}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <InputButton
          label="Completions Per Day"
          selectedOptions={`${completion} / Day`}
          handleOptions={() => {}}
        />

        <View
          style={{
            marginTop: 23,
            height: 40,
            width: 50,
            backgroundColor: color.dark.secondary,
            padding: 10,
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Icon
            name="plus"
            color={color.dark.gray}
            size={17}
            onPress={() => {
              setCompletion(completion + 1);
            }}
          />
        </View>
        <View
          style={{
            height: 40,
            width: 50,
            marginLeft: 4,
            marginTop: 23,
            alignItems: 'center',
            backgroundColor: color.dark.secondary,
            padding: 10,
            borderRadius: 8,
          }}>
          <Icon
            name="minus"
            color={color.dark.gray}
            size={17}
            onPress={() => {
              completion > 1 ? setCompletion(completion - 1) : null;
            }}
          />
        </View>
      </View>
      <View style={{padding: 4}}>
        <Text style={{color: color.dark.gray, marginTop: 4, fontSize: 12}}>
          Add Icon
        </Text>
        <FlatList
          data={Icons.slice(15)}
          numColumns={7}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleSelectIcon(item)}
              style={{padding: 8}}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40,
                  backgroundColor: color.dark.secondary,
                  padding: 2,
                  borderRadius: 8,
                }}>
                <Icon name={item} size={22} color={color.dark.gray} />
              </View>
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            borderRadius: 10,
          }}>
          <Button title="More Icons" onPress={() => {}} />
        </View>
      </View>
      <Text
        style={{
          marginLeft: 8,
          color: color.dark.gray,
          marginTop: 2,
          fontSize: 12,
        }}>
        Color
      </Text>
      <FlatList
        data={colorsPalette.slice(0, 19)}
        numColumns={8}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleSelectIcon(item)}
            style={{padding: 5}}>
            <View
              style={{
                height: 32,
                width: 32,
                borderRadius: 16,
                backgroundColor: item,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CreateHabit;
