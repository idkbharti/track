import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import color from '../design/colorSchema';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.dark.primary,
        color: color.dark.text,
      }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="gray" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Setting</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    color: 'gray',
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },
});

export default Setting;
