/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';

import FlexDirectionBasics from './enochFlex'
import EnochQQDemo from './enochQQ'
import EnochNavigator from './enochNavigator'
import EnochTextInput from './enochTextInput'
import EnochScrollView from './enochScrollView'
import EnochButton from './enochButton'

export default class RNProjectDemo extends Component {
  render() {
    return (
      //布局
      // <FlexDirectionBasics/>
      //QQ登陆
      // <EnochQQDemo/>
      //导航
      // <EnochNavigator/>
      //输入文本
      // <EnochTextInput/>
      //滚动视图
      // <EnochScrollView/>
      //Button
      <EnochButton/>
    );
  }
}

AppRegistry.registerComponent('RNProject', () => RNProjectDemo);
