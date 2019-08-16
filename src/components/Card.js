import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class Card extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.card}>
          <Image style={styles.thumbnail} source={{uri: this.props.img}} />
          <Text style={styles.text}>{this.props.name}, {this.props.age}yr, {this.props.sex}</Text>
          <View style={styles.ScrollView}>
          <ScrollView>
            <Text style={styles.profileText}>{this.props.profile}</Text>
          </ScrollView>
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    card: {
      alignItems: 'center',
      borderRadius: 5,
      overflow: 'hidden',
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 1,
      elevation: 1,
      height: 500
    },
    thumbnail: {
      width: 350,
      height: 350,
    },
    text: {
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10
    },
    ScrollView: {
      height: 100
    },
    profileText: {
      paddingLeft: 15,
      paddingRight: 15,
    }
  })