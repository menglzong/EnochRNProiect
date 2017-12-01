import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';

import FlexDirectionBasics from './learning/enochFlex'
import EnochQQDemo from './learning/enochQQ'
import EnochNavigator from './learning/enochNavigator'
import EnochTextInput from './learning/enochTextInput'
import EnochScrollView from './learning/enochScrollView'
import EnochButton from './learning/enochButton'
import EnochSegmented from './learning/enochSegmented'

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
      // <EnochButton/>
      <EnochSegmented/>
      // <EnochTab/>
    );
  }
}