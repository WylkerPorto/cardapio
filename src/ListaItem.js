import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Image, View, Text} from 'react-native';

export default class listaItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.clicou = this.clicou.bind(this);
    }

    clicou() {
        this.props.navigation.navigate('HomeProducts', {title:this.props.data.title, products:this.props.data.produtos});
    }

    render() {
        return (
            <TouchableHighlight onPress={this.clicou} underlayColor="#CCCCCC">
                <View style={[styles.listaItem, {backgroundColor: this.props.data.bg}]}>
                    <Image source={this.props.data.img} style={styles.listaImagem}/>
                    <View>
                        <Text style={styles.listaTitle}>{this.props.data.title}</Text>
                        <Text style={styles.listaDescription}>{this.props.data.descricao}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    listaItem: {
        height: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listaImagem: {
        width: 64,
        height: 64,
        marginLeft: 20,
        marginRight: 20,
    },
    listaTitle: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    listaDescription: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
