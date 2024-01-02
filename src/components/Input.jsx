import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import color from '../design/colorSchema';

const Input = ({text,setText,label}) => {
  return (
    <View>
      <Text style={{color:color.dark.gray,marginTop:4,fontSize:12}}>{label}</Text>
      <TextInput
        style={{height: 40, backgroundColor: color.dark.secondary, padding: 10,marginTop:4,borderRadius:8}}
        // placeholder="Type here..."
        onChangeText={(e)=>{setText(e)}}
        value={text}
      />
    </View>
  );
}

export default Input