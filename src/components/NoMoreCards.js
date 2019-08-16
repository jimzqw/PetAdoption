import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class NoMoreCards extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.noMoreCards}>
          <Text>No more pets</Text>
        </View>
      )
    }
  }


  const styles = StyleSheet.create({
    noMoreCards: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })