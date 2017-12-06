
import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    NavigatorIOS,
    Button
} from 'react-native';

import EnochTest from '../../enochTab'

export default class EnochHomePage extends Component {

  _onForward = () => {
    this.props.navigator.push({
        component: EnochTest,
        title: 'My Initial Scene',
        passProps: {
          text: 'This page has a right button in the nav bar',
        }
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
          />
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