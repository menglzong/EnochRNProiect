import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Text, 
} from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class EnochMine extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'gray',flex: 1}}> 
      <View style={{backgroundColor: 'orange', flex: 1, marginTop: 64}}> 
      <ScrollableTabView style = {{backgroundColor: 'white'}} renderTabBar={() => <DefaultTabBar/>} >
      <View tabLabel='Tab1' style = {{backgroundColor: 'black', flex: 1}}>
      <Text style = {{fontSize: 13, color: '#777777'}}>猜你喜欢</Text>
      </View>
      <Text tabLabel='Tab2' style = {{backgroundColor: 'blue', flex: 1}}/>
      <Text tabLabel='Tab3'/>
      <Text tabLabel='Tab4'/>
      <Text tabLabel='Tab5'/>
      <Text tabLabel='Tab6'/>
      </ScrollableTabView>
      </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  contentContainer: {
      marginTop: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems:'flex-start',
      width: Dimensions.get('window').width,
  },
})