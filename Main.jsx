import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import color from './src/design/colorSchema';

const MainApp = () => {
  const [text, setText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const targetText = 'Habit Harbor';
  const delay = 50;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(prevText => prevText + targetText.charAt(i));
      i++;
      if (i === targetText.length) {
        clearInterval(interval);
        setShowButton(true);
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const navigation = useNavigation();

  const handleButtonPress = () => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {showButton && (
        <TouchableOpacity
          onPress={handleButtonPress}
          style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.dark.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: color.dark.text,
    fontFamily: 'monospace',
  },
  buttonContainer: {
    paddingTop: 5,
  },
  button: {
    backgroundColor: color.dark.lightBlue,
    borderRadius: 30,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: color.dark.text,
  },
});

export default MainApp;
