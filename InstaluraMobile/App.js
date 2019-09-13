/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  FlatList
} from 'react-native';

const width = Dimensions.get('screen').width;

const App = () => {
  const fotos = [
    { id: 1, usuario: 'rafael' },
    { id: 2, usuario: 'alberto' },
    { id: 3, usuario: 'vitor' }
  ];

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList style={{ marginTop: 20 }}
          data={fotos}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View>
              <Text>{item.usuario}</Text>
              <Image source={require('./resources/img/alura.png')} style={{ width: width, height: width }} />
            </View>
          }
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
