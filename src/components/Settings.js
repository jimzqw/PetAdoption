import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Switch,
  TextInput
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateMin, updateMax, updateSwitch} from '../actions';

class Settings extends Component {
  

  handleSwitch() {
    const newState = !this.props.animalToggle;
    this.props.updateSwitch(newState);
  }

  render() {
    return (
      <View style = {styles.container}>
      <Text style={styles.Title}>Adopter Profile</Text>
      <View style={styles.ScrollView}>
        <ScrollView>
          <Text style={styles.profileText}>{this.props.profile}</Text>
        </ScrollView>
    </View>
    <Text style={styles.Title}>Preferences</Text>

    <View style={styles.label}>
      <Text style={styles.labelText}>Animal</Text>
      <View style={styles.switchStyle}>
        <Text style={styles.labelText}>Cat  </Text>
      <Switch
        onValueChange={() => this.handleSwitch()}
        value = {this.props.animalToggle}
        ios_backgroundColor = 'red'
      />
      <Text style={styles.labelText}>  Dog</Text>
      </View>
      </View>

      <View style={styles.label}>
        <Text style={styles.labelText}>Age</Text>
        <View style={styles.TextLabel}>
        <TextInput
          value = {String(this.props.ageMin)}
          placeholder='min'
          onChangeText={value => this.props.updateMin(value)}
          keyboardType='numeric'
          style={styles.TextInput}
        />
        <TextInput
          placeholder='max'
          value = {String(this.props.ageMax)}
          onChangeText={value => this.props.updateMax(value)}
          keyboardType='numeric'
          style={styles.TextInput}
        />
      </View>
      </View>
    </View>
    )
  }
};

const styles = StyleSheet.create({
  ScrollView: {
    height: 300,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    width: 350,
    alignSelf: 'center'
  
  },
  label: {
    flexDirection: 'row',
    paddingLeft: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  labelText: {
    fontSize: 20
  },
  profileText: {
    padding: 5
  },
  Title: {
    fontSize: 25,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15
  },
  container: {
    backgroundColor: 'white',
    alignContent: 'center',
    height: 1000
  },
  switchStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15
  },
  TextInput: {
    fontSize: 18,
    borderWidth: 1,
    width: 50,
    height: 25
  },
  TextLabel: {
    flexDirection: 'row', 
    width:150, 
    justifyContent:'space-between', 
    paddingRight: 15
  }
})

const mapStateToProps = (state) => {
  const {ageMin, ageMax, animalToggle, profile} = state.filter;
  return {ageMin, ageMax, animalToggle, profile};
};


export default connect(mapStateToProps,{updateMin, updateMax, updateSwitch})(Settings);
