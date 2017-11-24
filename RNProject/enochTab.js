import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TabBarIOS,
  } from 'react-native';

var TabItemIOS = TabBarIOS.Item;

export default class TabBarIOSDemo extends Component {
    constructor(props){
      super(props);
      this.state={
        selectedIndex: 0,
        notifCount: 0,
        presses: 0,
      };
    }

    _renderContent(color: string) {
        return (
          <View style={[styles.tabContent, {backgroundColor: color}]}>
          </View>
        );
    }

    render() {
      return (
        <View style={{flex:1}}>
          <Text style={styles.welcome}>
            TabBarIOS使用实例
          </Text>
          <TabBarIOS style={{flex:1,alignItems:"flex-end"}}
            tintColor="white"
            barTintColor="darkslateblue">

            
            <TabItemIOS
            title ='团购'
            icon = {require('./src/pfb_tabbar_homepage.png')}
            selectedIcon = {require('./src/pfb_tabbar_homepage_selected.png')}
            selected={this.state.selectedIndex == 0}
            onPress={() => {
              this.setState({
                  selectedIndex: 0
              });
            }}>
            {this._renderContent('blue')}
            </TabItemIOS>

            <TabItemIOS
            title = '附近'
            icon = {require('./src/pfb_tabbar_merchant.png')}
            selectedIcon = {require('./src/pfb_tabbar_merchant_selected.png')}
            selected={this.state.selectedIndex == 1}
             onPress={() => {
             this.setState({
                selectedIndex: 1,
             });
           }}>
           {this._renderContent('white')}
           </TabItemIOS>

           <TabItemIOS
           title = '订单'
           icon = {require('./src/pfb_tabbar_order.png')}
           selectedIcon = {require('./src/pfb_tabbar_order_selected.png')}
           selected={this.state.selectedIndex == 2}
            onPress={() => {
            this.setState({
                selectedIndex: 2
            });
            }}>
            {this._renderContent('red')}
            </TabItemIOS>

            <TabItemIOS
            title = '我的'
            icon = {require('./src/pfb_tabbar_mine.png')}
            selectedIcon = {require('./src/pfb_tabbar_mine_selected.png')}
            selected={this.state.selectedIndex == 3}
             onPress={() => {
             this.setState({
                selectedIndex: 3
             });
             }}>
             {this._renderContent('gray')}
             </TabItemIOS>

          </TabBarIOS>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    tabContent: {
      flex: 1,
      alignItems: 'center',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
    },
    tabText: {
      color: 'white',
      margin: 50,
    },
  });