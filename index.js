import React from 'react';
import { AppRegistry, View } from 'react-native';
import Titulo from './src/componente/titulo';
import ListaCoisas from './src/componente/lista-coisas';

const App = () => {
    return (
        <View>
            <Titulo texto={'Lista de Compras'} />
            <ListaCoisas />
        </View>
    );
};

// http://dontpad.com/munif/react

AppRegistry.registerComponent('projeto', () => App);
