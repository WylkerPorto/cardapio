import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

import ListaItem from './ListaItem';

export default class HomeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    key: 1,
                    title: 'Prato Executivo',
                    img: require('../assets/images/tipos/pe.png'),
                    descricao: 'Pratos ja prontos para comer.',
                    bg: '#e35339',
                    produtos: [
                        {key: 1, name: 'Prato de Frango', img: require('../assets/images/cardapio/pe/executivos_frang_.png')},
                        {key: 2, name: 'Prato de Peixe', img: require('../assets/images/cardapio/pe/executivos_peix_.png')},
                        {key: 3, name: 'Prato de Picanha', img: require('../assets/images/cardapio/pe/executivos_picanh_.png')},
                    ],
                },
                {
                    key: 2,
                    title: 'Saladas',
                    img: require('../assets/images/tipos/saladas.png'),
                    descricao: 'Pratos saudaveis para você.',
                    bg: '#a6bb24',
                    produtos: [
                        {key: 1, name: 'Salada de Frango', img: require('../assets/images/cardapio/saladas/salada-fr.png')},
                        {key: 2, name: 'Salada Água Doce', img: require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
                        {key: 3, name: 'Salada de Salmão', img: require('../assets/images/cardapio/saladas/salada_salma.png')},
                    ],
                },
                {
                    key: 3,
                    title: 'Bebidas',
                    img: require('../assets/images/tipos/bebidas.png'),
                    descricao: 'Refrescantes bebidas.',
                    bg: '#079ed4',
                    produtos: [
                        {key: 1, name: 'Caipiroska', img: require('../assets/images/cardapio/bebidas/capirosc_3.png')},
                        {key: 2, name: 'Cookie Cream', img: require('../assets/images/cardapio/bebidas/cookies_crea.png')},
                        {key: 3, name: 'Morango GD', img: require('../assets/images/cardapio/bebidas/morango_gd.png')},
                        {key: 4, name: 'Prata', img: require('../assets/images/cardapio/bebidas/patra.png')},
                        {key: 5, name: 'Suco Fitness', img: require('../assets/images/cardapio/bebidas/suco_fitines_gd.png')},
                    ],
                },
                {
                    key: 4,
                    title: 'Sobremesas',
                    img: require('../assets/images/tipos/sobremesa.png'),
                    descricao: 'Refrescantes bebidas.',
                    bg: '#fcb81c',
                    produtos: [
                        {key: 1, name: 'Brownie', img: require('../assets/images/cardapio/sobremesas/brownie_gd.png')},
                        {key: 2, name: 'Creme Papaya', img: require('../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
                        {key: 3, name: 'Delicia Gelada', img: require('../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')},
                    ],
                },
            ],
        };
    }

    static navigationOptions = {
        title: 'Restaurante XYZ',
        tabBarLabel: 'Home',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (<Image source={require('../assets/images/home_azul.png')} style={styles.icone}/>);
            } else {
                return (<Image source={require('../assets/images/home_preto.png')} style={styles.icone}/>);
            }
        },
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <ListaItem data={item} navigation={this.props.navigation}/>}
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
        marginTop: 10,
    }
});
