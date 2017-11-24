import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
} from 'react-native';
 
export default class enochSlider extends Component {
  render() {
    return (
      <View>
      <Text style = {styles.welcome}>SliderIOS实例</Text>
      <Slider  style={{margin:10}}
      onSlidingComplete={()=>console.log('当前的值为'+this.state.value)}
      onValueChange={(value)=>this.setState({value:value})}
    />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
});
