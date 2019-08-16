import React, {Component} from 'react';
import _ from 'lodash';
import {View, FlatList} from 'react-native';
import ListItem from './ListItem';
import {queryPets} from './Schemas';
import realm from './Schemas';

export default class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPets: []
    };
    this.reloadData();
    realm.addListener('change', () => {
      this.reloadData();
    })
  }


reloadData = () => {
  queryPets().then((savedPets) => {
    this.setState({ savedPets });
  }).catch((error) => {
    //this.setState({ savedPets: [] });
  });
  console.log('reload data');
}


  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data = {this.state.savedPets}
         renderItem = {({item}) => <ListItem pet={item}/>}
         keyExtractor = {item => item.id}
        />
      </View>
    )
  }
};

