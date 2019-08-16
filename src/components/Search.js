import React, {Component} from 'react';
import _ from 'lodash';
import axios from 'axios';
import Realm from 'realm';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import Card from './Card';
import NoMoreCards from './NoMoreCards';
import {databaseOptions, SCHEMA} from './Schemas';
import {updateMin, updateMax, updateSwitch, updateProfile} from '../actions';

const petsJson = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/pets.json';
const settingsJson = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/settings.json';

class Search extends Component {
  
    constructor(props){
      super(props)
      this.state = {
        cards: [],
        filteredCards: [],
        outOfCards: false
      };
    }
    


  componentDidMount() {
    this.loadPets();
    this.preloadSetting();
  }

  componentWillReceiveProps(nextProps) {
    this.updateData(nextProps);
    
  }

  loadPets() {
    axios.get(petsJson)
    .then((response) => {
      this.setState({
        cards : response.data
      });
    });
  }

  preloadSetting() {
    axios.get(settingsJson)
    .then((response) => {
      const {typePreference, ageRange, profile} = response.data;   
      this.props.updateMin(ageRange.min);
      this.props.updateMax(ageRange.max);
      this.props.updateSwitch(typePreference == 'dog');
      this.props.updateProfile(profile)
      this.updateData(this.props);
    });
  }

  updateData(props) {
    const {ageMin, ageMax, animalToggle} = props;
    const newCards = _.filter(this.state.cards, {type: animalToggle == true ? 'dog' : 'cat'});
    const newData = _.filter(newCards, function(pet) {return pet.age >= ageMin && pet.age <= ageMax;})
    this.setState({
      filteredCards: newData,
      outOfCards: false
    });

  }

  insertPet (card) {
    const newPet = {
        id: card.id,
        name: card.name,
        img: card.img,
        age: card.age,
        sex: card.sex,
        profile: card.profile,
        type: card.type
      };
        Realm.open(databaseOptions).then(realm => {
            realm.write(() => {
                realm.create(SCHEMA, newPet, true);
                console.log('Insert '+newPet.name);
            });
      });
    }


  cardRemoved (index) {
    if (this.state.filteredCards.length - index == 1) {
      if (!this.state.outOfCards) {
        this.setState({
          outOfCards: true
        })
      }
    }
  }


  render() {
    return (
      <SwipeCards
        cards={this.state.filteredCards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={false}
        showNope={false}
        onClickHandle={null}
        handleYup={this.insertPet}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const {ageMin, ageMax, animalToggle, profile} = state.filter;
  return {ageMin, ageMax, animalToggle, profile};
};

export default connect(mapStateToProps,{updateMin, updateMax, updateSwitch, updateProfile})(Search);

