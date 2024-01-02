import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Styles from '../../design/style';
import React from 'react';
import Button from '../../components/Button';
import color from '../../design/colorSchema';

const Todo = () => {
  return (
    <View style={Styles.container}>
      <Text style={{color: color.dark.text, fontSize: 22, marginBottom: 15}}>
        Quick Start
      </Text>
      <Button label="Start Empty Habit" onPress={() => {}} icon={'plus'} />
      <Text style={{color: color.dark.text, fontSize: 22, marginVertical: 15}}>
        Habit
      </Text>
      <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
        <View style={{flex: 0.5}}>
          <Button label="New Habit" icon="calendar" type="boxy" />
        </View>
        <View style={{flex: 0.5}}>
          <Button label="Explore Habit" icon="magnifier" type="boxy" />
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#193855',
            padding: 15,
            gap: 15,
            borderRadius: 5,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>How to get stared</Text>
          <Icon
            name="arrow-right"
            size={24}
            color="#1D82EA"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: color.dark.text,
    fontSize: 18,
  },
});

export default Todo;
