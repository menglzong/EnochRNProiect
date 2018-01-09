
import React, { Component, PureComponent } from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    NavigatorIOS,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';

import EnochMenuView from './EnochHomeMenu'
import EnochItemCell from './EnochRecommendCell'

let recommend = 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind'

export default class EnochHomePage extends PureComponent {

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

  constructor(props: Object) {
    super(props)
    this.requestRecommend()
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

  onCellSelected(info: Object){
    alert(info.title)
  }

  renderItemCell(info: Object){
    return (
      <EnochItemCell 
        info = {info.item}
        onPress = {this.onCellSelected}
      />
    )
  }

  async requestRecommend() {
    try {
        let response = await fetch(recommend)
        let json = await response.json()
        let list = json.data.map(
            (info) => {
                return {
                    key: info.id,
                    id: info.id,
                    imageUrl: info.squareimgurl.replace('w.h', '160.0'),
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            }
        )

        this.setState({
            dataList: list,
        })
    } catch (error) {
        
    }
  }

  renderHeader() {

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
      <View>
        <EnochMenuView menuInfos = {menuInfos} onMenuSelecteds = { _ => this.onMenuSelected()}/>
          <View style={styles.recommendHeader}>
              <Text style = {{fontSize: 13, color: '#777777'}}>猜你喜欢</Text>
          </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}> 
        <View style={{flex: 1}}>
        <FlatList style = {{flex: 1}}
        refreshing = {false}
        data = {this.state.dataList}
        renderItem={(item)=>this.renderItemCell(item)}
        getItemLayout={(data, index) => ( {length: 44, offset: 44 * index, index} )}
        ListHeaderComponent = { _ => this.renderHeader()}
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
  recommendHeader: {
    height: 35,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: 'white'
},
})