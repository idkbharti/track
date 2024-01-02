import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import React from 'react';
import Button from '../../components/Button';
import color from '../../design/colorSchema';

const Exercise = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: color.dark.text, fontSize: 22, marginBottom: 15}}>
        Quick Start
      </Text>
      <Button label="Start Empty Habit" onPress={() => {}} icon={'plus'} />
      <Text style={{color: color.dark.text, fontSize: 22, marginVertical: 15}}>
        Routine
      </Text>
      <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
        <View style={{flex: 0.5}}>
          <Button label="New Routine" icon="calendar" type="boxy" />
        </View>
        <View style={{flex: 0.5}}>
          <Button label="Explore Exercise" icon="magnifier" type="boxy" />
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: color.dark.fadeBlue,
            padding: 15,
            gap: 15,
            borderRadius: 5,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>How to get stared</Text>
          <Icon
            name="arrow-right"
            size={24}
            color={color.dark.lightBlue}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.dark.primary,
    padding: 20,
  },
  text: {
    color: color.dark.text,
    fontSize: 18,
  },
});

export default Exercise;
