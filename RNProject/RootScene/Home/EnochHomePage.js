
import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    NavigatorIOS,
    FlatList,
} from 'react-native';

import EnochMenuView from './EnochHomeMenu'

export default class EnochHomePage extends Component {

  state = {
    dataList: [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'}
    ]
}

  _onForward = () => {
    this.props.navigator.push({
        component: EnochTest,
        title: 'My Initial Scene',
        passProps: {
          text: 'This page has a right button in the nav bar',
        }
    });
  }

  onMenuSelected(index: number){
    alert('你好'+ index)
  }

  render() {
    let menuInfos = [
      { title: '美食', icon: require('../../src/icon_homepage_default.png') },
      { title: '电影', icon: require('../../src/icon_homepage_default.png') },
      { title: '酒店', icon: require('../../src/icon_homepage_default.png') },
      { title: 'KTV', icon: require('../../src/icon_homepage_default.png') },
      { title: '优惠买单', icon: require('../../src/icon_homepage_default.png') },
      { title: '周边游', icon: require('../../src/icon_homepage_default.png') },
      { title: '生活服务', icon: require('../../src/icon_homepage_default.png') },
      { title: '休闲娱乐', icon: require('../../src/icon_homepage_default.png') },
      { title: '丽人/美发', icon: require('../../src/icon_homepage_default.png') },
      { title: '购物', icon: require('../../src/icon_homepage_default.png') },

     ]

    return (
      <View style={{backgroundColor: 'white', flex: 1}}> 
        <EnochMenuView menuInfos = {menuInfos} onMenuSelected = {this.onMenuSelected}/>
        <View style={{flex: 1}}>
        <FlatList style = {{flex: 1}}
        data = {this.state.dataList}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})