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
    TabBarIOS,
    NavigatorIOS
  } from 'react-native';

import EnochHomePage from './RootScene/Home/EnochHomePage'
import EnochMerchant from './RootScene/Merchant/EnochMerchant'
import EnochOrder from './RootScene/Order/EnochOrder'
import EnochMine from './RootScene/Mine/EnochMine'
// import EnochTest from './enochTab'

var TabItemIOS = TabBarIOS.Item;

export default class RNProjectDemo extends Component {
    constructor(props){
      super(props);
      this.state={
        selectedIndex: 0,
        notifCount: 0,
        presses: 0,
      };
    }

    _renderContent(index: number) {
        switch (index) {
          case 0:
          return  <NavigatorIOS
            initialRoute={{
              component: EnochHomePage,
              title: '团购',
            }}
            style={{flex: 1}}
          />
            break;
          case 1:
          return  <NavigatorIOS
            initialRoute={{
              component: EnochMerchant,
              title: '附近',
            }}
            style={{flex: 1}}
          />
            break;
          case 2:
          return  <NavigatorIOS
            initialRoute={{
              component: EnochOrder,
              title: '订单',
            }}
            style={{flex: 1}}
          />
            break;
          case 3:
          return  <NavigatorIOS
            initialRoute={{
              component: EnochMine,
              title: '我的',
            }}
            style={{flex: 1}}
          />
            break;
          default:
          return  <NavigatorIOS
            initialRoute={{
              component: EnochHomePage,
              title: '团购',
            }}
            style={{flex: 1}}
          />
            break;
        }
    }

    render() {
      return (
        <View style={{flex:1}}>
          <TabBarIOS style={{flex:1,alignItems:"flex-end"}}
            barTintColor="white"
            tintColor = 'mediumturquoise'
          >
          
            <TabItemIOS
            title ='团购'
            icon = {require('./src/pfb_tabbar_homepage.png')}
            selectedIcon = {require('./src/pfb_tabbar_homepage_selected.png')}
            selected = {this.state.selectedIndex == 0}
            renderAsOriginal = {true}
            onPress={() => {
              this.setState({
                  selectedIndex: 0
              });
            }}>
            {this._renderContent(0)}
            </TabItemIOS>

            <TabItemIOS
            title = '附近'
            icon = {require('./src/pfb_tabbar_merchant.png')}
            selectedIcon = {require('./src/pfb_tabbar_merchant_selected.png')}
            selected={this.state.selectedIndex == 1}
            renderAsOriginal = {true}
             onPress={() => {
             this.setState({
                selectedIndex: 1,
             });
           }}>
           {this._renderContent(1)}
           </TabItemIOS>

           <TabItemIOS
           title = '订单'
           icon = {require('./src/pfb_tabbar_order.png')}
           selectedIcon = {require('./src/pfb_tabbar_order_selected.png')}
           selected={this.state.selectedIndex == 2}
           renderAsOriginal = {true}
            onPress={() => {
            this.setState({
                selectedIndex: 2
            });
            }}>
            {this._renderContent(2)}
            </TabItemIOS>

            <TabItemIOS
            title = '我的'
            icon = {require('./src/pfb_tabbar_mine.png')}
            selectedIcon = {require('./src/pfb_tabbar_mine_selected.png')}
            selected={this.state.selectedIndex == 3}
            renderAsOriginal = {true}
             onPress={() => {
             this.setState({
                selectedIndex: 3
             });
             }}>
             {this._renderContent(3)}
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
    tabText: {
      color: 'white',
      margin: 50,
    },
    centering: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  AppRegistry.registerComponent('RNProject', () => RNProjectDemo);
