import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View } from 'react-native';

export default class NavigatorIOSApp extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View>
      <NavigatorIOS
      initialRoute={{
        component: MyScene,
        title: 'My Initial Scene',
      }}
      style={{flex: 1}}
      />
      <Text>Current Scene: { this.props.title }</Text>
      <TouchableHighlight onPress={this._onForward}>
        <Text style = {{backgroundColor: 'red'}}>Tap me to load the next scene</Text>
      </TouchableHighlight>
     </View>
    )
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text style = {{backgroundColor: 'red'}}>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}