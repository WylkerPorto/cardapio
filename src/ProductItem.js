import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';

export default class ProductItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.listaItem}>
                <Image resizeMode="contain" source={this.props.data.img} style={styles.listaImagem}/>
                <View>
                    <Text style={styles.listaTitle}>{this.props.data.name}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listaItem: {
        height: 100,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 5,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listaImagem: {
        width: 150,
        height: 80,
        marginLeft: 5,
        marginRight: 5,
    },
    listaTitle: {
        fontSize: 20,
    },
});
