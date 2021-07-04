import React from 'react'
import { View,Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { style } from './style'

export function TituloContato() {
    const navigation = useNavigation();
    return(
        <View style={style.header}>

            <StatusBar translucent={true} backgroundColor='transparent'  />

            <TouchableOpacity style={style.botaoVolta} onPress={ () => navigation.navigate('Chat') } >
                <Image source={require('../../assets/icons/Vava.png')} style={style.volta} />
                <Image source={require('../../assets/icons/PerfilZap.png')} style={style.foto} />
            </TouchableOpacity>

            <View>
                <Text style={style.nome} >Pessoa 1</Text>
                <Text style={style.status} >Online</Text>
            </View>

            <View style={style.canto}>
                <Image source={require('../../assets/icons/CameraLigar.png')} style={style.camera} />
                <Image source={require('../../assets/icons/TelefoneLigar.png')} style={style.telefone} />
                <Image source={require('../../assets/icons/Menu2.png')} style={style.menu} />
            </View>

        </View>
    )
}