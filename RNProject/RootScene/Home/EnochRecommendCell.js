import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';

export default class EnochRecommendCell extends Component {

    constructor(props: Object) {
        super(props)
    }

    render() {
        let { info } = this.props
        return (
            <TouchableOpacity style={itemStyles.container} onPress={() => this.props.onPress(info)}>
            <Image style={itemStyles.icon} source={{uri: info.imageUrl}} />
            <View style={itemStyles.rightContainer}>
            <Text style = {itemStyles.text}>{info.title}</Text>
            <View>
            </View>
            <Text style = {itemStyles.price}>{info.subtitle}</Text>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text style = {itemStyles.price}>{info.price}</Text>
            </View>

            </View>
            </TouchableOpacity>
        );
    }
}

const itemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 3,
        borderColor: '#e0e0e0',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: '#06C1AE'
    }
})