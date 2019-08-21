import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class PopularTab extends Component {
    static navigationOptions = {
        title: '인기',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='trophy' style={{ color: tintColor }} />
        )

    }

    render() {
        return (
            <View style={style.container}>
                <Text>인기</Text>
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