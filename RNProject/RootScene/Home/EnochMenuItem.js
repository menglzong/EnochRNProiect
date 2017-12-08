import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

export default class EnochMenuItem extends Component {
    render() {
        return (
            <TouchableOpacity style={itemStyles.container}
                onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={itemStyles.icon} />
                <Text style = {{fontSize: 13, color: '#777777'}}>{this.props.title} </Text>
            </TouchableOpacity>
        );
    }
}

const itemStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width/ 5,
    },
    icon: {
        width: Dimensions.get('window').width / 9,
        height: Dimensions.get('window').width / 9,
        margin: 5,
    }
})