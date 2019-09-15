/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  FlatList
} from 'react-native';

import Post from './src/components/Post';

class InstaluraMobile extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({ fotos: json }));
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <FlatList style={styles.container}
            data={this.state.fotos}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Post foto={item} />
            }
          />
        </SafeAreaView>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

export default InstaluraMobile;