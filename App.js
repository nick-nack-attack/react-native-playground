/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {UselessTextInput} from './components/UselessTextInput';

const screen = Dimensions.get('window');

const App: () => React$Node = () => {
  const printToConsole = () => {
    console.log('Oh look at this being printed to the console.');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View
              style={
                (styles.sectionContainer, styles.container, styles.horizontal)
              }>
              <Text style={styles.sectionTitle}>Welcome</Text>
              <Text style={styles.sectionDescription}>Start the work day</Text>
            </View>
            <Button
              style={styles.mainButton}
              title="Start"
              onPress={() => printToConsole()}
              accessibilityLabel="Start Button"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

console.log(screen);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  uselessInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 30,
  },
});

export default App;
