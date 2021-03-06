import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Text, 
} from 'react-native';
import { NativeModules } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { isIphoneX } from 'react-native-iphone-x-helper'

export default class EnochMine extends Component {


  state = {
    dataTitles: ['享美食', '住酒店', '爱玩乐', '全部']
  }

  constructor(props: Object) {
    super(props)
    this.loadData()
  }

  loadData() {
    // NativeModules.RCTTestManager.RNInvokeOCCallBack( {'name':'jiangqq','description':'http://www.lcode.org'})
    NativeModules.EnochTestManager.RNInvokeOCCallBack({'name':'jiangqq','description':'http://www.lcode.org'})
  }

  render() {

    let titles = ['享美食', '住酒店', '爱玩乐', '全部']

    return (
      <View style={styles.contentContainer}> 
      <ScrollableTabView 
      renderTabBar={() => <DefaultTabBar style = {styles.tabBar}/>} 
      tabBarUnderlineStyle = {{backgroundColor: 'red'}} 
      tabBarTextStyle = {styles.tabBarText}
      >
      {titles.map((title, i) => (
        <View tabLabel = {title} key = {i} style = {styles.subViews}>
        <Text style = {{fontSize: 13, color: '#777777'}}>{title}</Text>
        </View>
      ))}
      </ScrollableTabView>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white', 
    flex: 1,
    marginTop: isIphoneX() ? 84:64,
  },
  subViews: {
    backgroundColor: 'white', 
    flex: 1,
  },
  tabBar: {
    marginTop: 10,
  },
  tabBarText: {
    borderWidth: 0
  },
})