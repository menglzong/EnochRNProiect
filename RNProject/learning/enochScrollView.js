import React, { Component } from 'react';
import {ScrollView, Image, Text, View, FlatList, StyleSheet, SectionList} from 'react-native';

class EnochScrollView extends Component {
    render() {
        return (
            <ScrollView>
            <Text style={{fontSize:96}}>Scroll me plz</Text>
            <Text style={{fontSize:96}}>If you like</Text>
            <Text style={{fontSize:96}}>Scrolling down</Text>
            <Text style={{fontSize:96}}>What's the best</Text>
            <Text style={{fontSize:96}}>Framework around?</Text>
            <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}

class EnochListView extends Component {
    render () {
        return (
            <View style = {{flex: 1}}>
             <FlatList style = {{flex: 1}}
               data = {[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'}
               ]}
               renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
             />
             <SectionList style = {{flex: 1, backgroundColor:'red'}}
             sections = {[
                 {key: 1,title: 'D', data: [{key: 'Devin'}]},
                 {key: 2,title: 'J',  data: [
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'}
                   ]}
             ]}
             renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
             renderSectionHeader = {({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
           />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      }
  })

export default class EnochDataList extends Component {
    render () {
        return (
            // <EnochScrollView/>
            <EnochListView/>
        );
    }
}
