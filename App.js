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
  RefreshControl,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [items, setItems] = useState([
    {key: 1, item: 'item 1'},
    {key: 2, item: 'item 2'},
    {key: 3, item: 'item 3'},
    {key: 4, item: 'item 4'},
    {key: 5, item: 'item 5'},
    {key: 6, item: 'item 6'},
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setItems([...items, {key: 7, item: 'item 7'}, {key: 8, item: 'item 8'}]);
    setRefreshing(false);
  };
  return (
    <View>
      <ScrollView
        style={styles.body}
        horizontal={false}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={handleRefresh}
            colors={['red']}
          />
        }>
        {items.map(singleitem => (
          <View style={styles.item} key={singleitem.key}>
            <Text style={styles.itemTitle}>{singleitem.item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: 'yellow',
  },
  item: {
    backgroundColor: '#4ae1fa',
    paddingVertical: 20,
    marginVertical: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default App;
