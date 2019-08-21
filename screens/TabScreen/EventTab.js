import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class PopularTab extends Component {
    static navigationOptions = {
        title: '이벤트',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='menu' style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={style.container}>
                <Text>이벤트</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});