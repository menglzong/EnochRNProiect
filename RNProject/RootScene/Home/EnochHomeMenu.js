import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    Button,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import EnochMenuItem from './EnochMenuItem'

export default class EnochHomeMenu extends Component {

    constructor(props: Object) {
        super(props)
    }

    render() {

        let { menuInfos, onMenuSelected } = this.props

        let menuItems = menuInfos.map(
            (info, i) => (
                <EnochMenuItem 
                key = {info.title}//没有出现警告
                icon = {info.icon}
                title = {info.title}
                onPress = {() => {
                    onMenuSelected && onMenuSelected(i)
                }}>
                    
                </EnochMenuItem>
            )
        )

        return (
            <View style = {styles.contentContainer}>
            {menuItems}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'flex-start',
        width: Dimensions.get('window').width,
    },
})
