import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import color from '../design/colorSchema';

const InputButton = ({label, handleOption, selectedOptions, icon, width}) => {
  return (
    <View style={{flex: width ? 0.5 : 1, paddingHorizontal: width ? 8 : 4}}>
      <Text style={{color: color.dark.gray, marginTop: 4, fontSize: 12}}>
        {label}
      </Text>
      <TouchableOpacity onPress={handleOption} style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            height: 40,
            backgroundColor: color.dark.secondary,
            padding: 10,
            marginTop: 4,
            borderRadius: 8,
          }}>
          <Text style={{flex: 1,color:color.dark.gray}}>{selectedOptions}</Text>
          <Icon name={icon} size={20} color={color.dark.gray} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputButton;
