import React, { Component } from 'react';
import {
     View,
     StyleSheet,
     Button 
} from 'react-native';

import EnochTest from '../../enochTab'

export default class EnochMerchant extends Component {
  _onForward = () => {
    this.props.navigator.push({
        component: EnochTest,
        title: 'My Initial Scene',
    });
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}> 
        <View style={styles.style_view_commit} >
          <Button
          onPress={this._onForward}
          title='push'
          color='#fff'
          >
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  style_view_commit:{  
    marginTop:200,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'blue',
    height:35,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})