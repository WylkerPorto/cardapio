import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class Horarios extends Component {

    static navigationOptions = {
        tabBarLabel: 'Horários',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused){
                return(<Image source={require('../assets/images/horario_azul.png')} style={styles.icone}/>)
            }else {
                return(<Image source={require('../assets/images/horario_preto.png')} style={styles.icone}/>)
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    icone: {
        width: 26,
        height: 26,
    },
});
