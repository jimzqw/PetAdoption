import React from 'react';
import { Scene, Router, Actions, Tabs } from 'react-native-router-flux';
import Search from './components/Search';
import Settings from './components/Settings';
import Saved from './components/Saved';
import PetDetail from './components/PetDetail';

const RouterComponent = () => {
  return (
    <Router>
      
      <Scene 
        key='main' 
        title='Pet Adoption'
      >
          <Scene 
            key='tabs' 
            tabs={true} 
            labelStyle={{ fontSize: 20, padding: 10 }} 
          >      
                <Tabs
                  key="Search"
                  component={Search}
                  title="Search"
                  hideNavBar
                  swipeEnabled
                />

                <Tabs
                  key="Saved"
                  component={Saved}
                  title="Saved"
                  hideNavBar
                  swipeEnabled
                />

                
                <Tabs
                  key="Settings"
                  component={Settings}
                  title="Settings"
                  hideNavBar
                  swipeEnabled
                />

                
        </Scene>
        <Scene key='PetDetail' component = {PetDetail} title='Pet Detail' />
      </Scene>
    </Router>
  );
};

export default RouterComponent;