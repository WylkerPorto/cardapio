import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const nave = createStackNavigator({
    HomeList:{
        screen:HomeList
    },
    HomeProducts:{
        screen:HomeProducts
    }
});

export default nave;
