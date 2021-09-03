/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.r1}>
        <View style={styles.v11}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.v12}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.v13}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>

      <View style={styles.r2}>
        <Text style={styles.text}>4</Text>
      </View>

      <View style={styles.r3}>
        <Text style={styles.text}>5</Text>
      </View>

      <View style={styles.r4}>
        <View style={styles.v41}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.v42}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>

      {/* <Text
        style={{
          fontSize: 29,
          fontStyle: 'italic',
          margin: 10,
        }}>
        {counter}
      </Text>
      <Button
        title="Add"
        onPress={() => {
          let newCounter = parseInt(counter) + 1;
          setCounter(newCounter);
        }}
      />
      {loggedIn ? (
        <Text style={styles.text}>Welcome Pratik!</Text>
      ) : (
        <Text style={styles.text}>Login Page</Text>
      )}

      <Button
        title="Go to the video"
        onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=_bI02tUf-do');
        }}
      />

      <View style={{width: 500, paddingVertical: 40}}>
        <Button
          title={loggedIn ? 'Log Out' : 'Log In'}
          onPress={() => setLoggedIn(!loggedIn)}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  r1: {
    height: 70,
    flexDirection: 'row',
  },
  v11: {
    backgroundColor: 'cyan',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  v12: {
    backgroundColor: 'pink',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  v13: {
    backgroundColor: 'yellow',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  r2: {
    backgroundColor: 'red',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  r3: {
    backgroundColor: 'lightgreen',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  r4: {
    flex: 1,
    flexDirection: 'row',
  },
  v41: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  v42: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default App;
