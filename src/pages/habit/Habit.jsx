import {View, Text} from 'react-native';

import color from '../../design/colorSchema';
import EmptyHabit from './EmptyHabit';
import { useState } from 'react';
import CreateHabit from './CreateHabit';

const Habit = () => {
  const [state,setState]=useState('create')


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.dark.primary,
        alignItems: state === 'empty' ? 'center' : null,
        justifyContent: state === 'empty' ? 'center' : null,
        padding:20
      }}>
      {state === 'empty' ? <EmptyHabit setState={setState} /> : null}
      {state === 'create' ? <CreateHabit setState={setState} /> : null}
    </View>
  );
};

export default Habit;
