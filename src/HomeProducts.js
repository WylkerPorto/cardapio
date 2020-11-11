import React, { Component } from 'react';
import {View, Image, StyleSheet, FlatList, Text} from 'react-native';

import ProductItem from './ProductItem';

export default class HomeProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.navigation.state.params.products,
        };
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
        tabBarLabel: 'Home',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused){
                return(<Image source={require('../assets/images/home_azul.png')} style={styles.icone}/>)
            }else {
                return(<Image source={require('../assets/images/home_preto.png')} style={styles.icone}/>)
            }
        }
    });

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <ProductItem data={item}/>}
                    keyExtractor={(item, index) => item.key.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icone: {
        width: 26,
        height: 26,
    },
    container: {
        flex: 1,
        backgroundColor: '#d5d5d5'
    }
});
