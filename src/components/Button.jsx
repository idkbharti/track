import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import React from 'react';
import color from '../design/colorSchema';

const Button = ({label, onPress, icon, type = null}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: type === 'boxy' ? 'column' : 'row',
          backgroundColor: '#1C1C1E',
          padding: type === 'boxy' ? 20 : 10,
          paddingHorizontal: 15,
          gap: 15,
          borderRadius: 5,
          alignItems: type === 'boxy' ? 'center' : 'flex-start',
        }}>
        <Icon name={icon} size={24} color="#1D82EA" style={styles.icon} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {},
  text: {
    color: color.dark.text,
    fontSize: 17,
  },
});

export default Button;
