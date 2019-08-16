import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class PetDetail extends Component {
  
    render() {
      const {id, name, sex, age, img, profile, type} = this.props.pet;
      return (
        <View style={styles.card}>
          <Image style={styles.thumbnail} source={{uri: img}} />
          <Text style={styles.text}>{name}, {age}yr, {sex}</Text>
          <View style={styles.ScrollView}>
          <ScrollView>
            <Text style={styles.profileText}>{profile}</Text>
          </ScrollView>
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    card: {
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 5,
      overflow: 'hidden',
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 0.5,
      elevation: 1,
      height: 600
    },
    thumbnail: {
      width: 350,
      height: 350,
    },
    text: {
      fontSize: 25,
      paddingTop: 20,
      paddingBottom: 10
    },
    ScrollView: {
      paddingTop: 10,
      height: 150,
      alignContent: 'center'
    },
    profileText: {
      paddingLeft: 15,
      paddingRight: 15,
    }
  })