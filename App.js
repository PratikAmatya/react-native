/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  SectionList,
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
  // For Flast List
  // const [items, setItems] = useState([
  //   {key: '1', name: 'item 1'},
  //   {key: '2', name: 'item 2'},
  //   {key: '3', name: 'item 3'},
  //   {key: '4', name: 'item 4'},
  //   {key: '5', name: 'item 5'},
  //   {key: '6', name: 'item 6'},
  // ]);

  // For Flat List
  // const [items, setItems] = useState([
  //   {name: 'item 1'},
  //   {name: 'item 2'},
  //   {name: 'item 3'},
  //   {name: 'item 4'},
  //   {name: 'item 5'},
  //   {name: 'item 6'},
  // ]);

  const [orders, setOrders] = useState([
    {name: 'Order 1', data: ['item 1']},
    {name: 'Order 2', data: ['item 1', 'item 2']},
    {name: 'Order 3', data: ['item 1', 'item 2', 'item 3']},
    {name: 'Order 4', data: ['item 1', 'item 2', 'item 3', 'item 4']},
    {name: 'Order 5', data: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']},
    {
      name: 'Order 6',
      data: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'],
    },
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  // const handleRefresh = () => {
  //   setRefreshing(true);
  //   setItems([
  //     ...items,
  //     {key: '7', name: 'item 7'},
  //     {key: '8', name: 'item 8'},
  //   ]);
  //   setRefreshing(false);
  // };

  const handleRefresh = () => {
    setRefreshing(true);
    setOrders([
      {name: 'Order 7', data: ['item 1', 'item 2']},
      {name: 'Order 8', data: ['item 1', 'item 2', 'item 3']},
    ]);
    setRefreshing(false);
  };

  // const handleFlatlistRefresh = () => {
  //   setRefreshing(true);
  //   setItems([...items, {name: 'item 7'}, {name: 'item 8'}]);
  //   setRefreshing(false);
  // };

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={orders}
      renderItem={({item}) => (
        <View>
          <Text style={styles.itemTitle}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{section.name}</Text>
        </View>
      )}
      renderSectionFooter={({section}) => (
        <View>
          <Text>Pratik</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          colors={['red', 'black', 'blue']}
          onRefresh={handleRefresh}
        />
      }
    />

    // <ScrollView
    //   style={styles.body}
    //   horizontal={false}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={handleRefresh}
    //       colors={['black']}
    //     />
    //   }>
    //   {items.map(singleitem => (
    //     <View style={styles.item} key={singleitem.key}>
    //       <Text style={styles.itemTitle}>{singleitem.name}</Text>
    //     </View>
    //   ))}
    // </ScrollView>

    // <FlatList
    //   // numColumns={2}
    //   keyExtractor={(item, index) => index.toString()}
    //   // horizontal={true}
    //   // inverted
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.itemTitle}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={handleFlatlistRefresh}
    //       colors={['blue', 'red', 'black']}
    //     />
    //   }
    // />
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
    color: 'black',
  },
});

export default App;
