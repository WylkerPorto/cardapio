import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const Navegador = createBottomTabNavigator({
    Home:{
        screen:Home
    },
    Contato:{
        screen:Contato
    },
    Horarios:{
        screen:Horarios
    },
    Sobre:{
        screen:Sobre
    },
});

export default createAppContainer(Navegador);
