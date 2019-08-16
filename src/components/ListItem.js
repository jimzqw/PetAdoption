import React, { Component } from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ListItem extends Component {

  onRowPress() {
    Actions.PetDetail({ pet: this.props.pet });
    console.log('pressed');
  }



  render() {
    const { id, name, sex, age, profile, img, type } = this.props.pet;


    
      return (
        
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
          <View style={styles.conatinerStyle}>         
          <Image style={styles.avatar} source={{uri: img}} />        
          <View style={styles.textBox}>
              <Text style={styles.titleStyle}>
                {name},  {age}yrs,  {sex}
              </Text>

              <Text style={styles.secondRowTitle}>
                  {profile}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

      );
    }
}

const styles = {
  titleStyle: {
    fontSize: 20
  },
  conatinerStyle: {
    backgroundColor: 'white',
    height: 80,
    padding: 5,
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 0.5
  },
  textBox: {
    flex: 3,
    padding: 5
  },
  secondRowTitle: {
    fontSize: 12,
    height: 30
  },
  avatar: {
    alignItems: 'center',
    height: 60,
    width: 60,
    flex: 1
  }
};

