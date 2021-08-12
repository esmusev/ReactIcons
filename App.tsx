import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from './src/icon-font.js';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.text}>
          <Icon name="spin6" size={60} color="#9B0" /> - spin6
        </Text>
        <Text style={styles.text}>
          <Icon name="spin5" size={60} color="#9B0" /> - spin5
        </Text>
        <Text style={styles.text}>
          <Icon name="trash-empty" size={60} color="#9B0" /> - trash-empty
        </Text>
        <Text style={styles.text}>
          <Icon name="cancel" size={60} color="#9B0" /> - cancel
        </Text>
        <Text style={styles.text}>
          <Icon name="resize-full-alt" size={60} color="#9B0" /> - resize-full-alt
        </Text>
        <Text style={styles.text}>
          <Icon name="thumbs-up-alt" size={60} color="#9B0" /> - thumbs-up-alt
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    paddingLeft: "20%",
    paddingVertical: "20%"
  },
  text: {
    fontSize: 26,
    color: '#4aa',
  },
});

export default App;
