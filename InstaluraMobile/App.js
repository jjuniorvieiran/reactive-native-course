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
        <FlatList style={styles.container}
          data={fotos}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View>
              <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('./resources/img/alura.png')}
                  style={styles.fotoDePerfil} />
                <Text>{item.usuario}</Text>
              </View>
              <Image source={require('./resources/img/alura.png')} style={styles.foto} />
            </View>
          }
        />
      </SafeAreaView>
    </Fragment>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40, height: 40
  },
  foto: {
    width: width,
    height: width
  }
})

export default App;
