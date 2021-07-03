import React from 'react'
import { View, Text, StatusBar, SafeAreaView, Image } from 'react-native'

import { style } from './style'

export function Header() {
    return(
        <SafeAreaView>
            <StatusBar translucent={true} backgroundColor='transparent'  />
            <View style={style.header}>

            <View style={style.superior}>
                <Text style={style.titulo}>WhatsApp</Text>

                <View style={style.botoes}>
                    <Image source={require('../../assets/icons/LupaZap.png')} style={style.lupa} />
                    <Image source={require('../../assets/icons/Menu2.png')} style={style.menu} />
                </View>
            </View>

                <View style={style.paginas} >
                    <Image source={require('../../assets/icons/CameraZap.png')} style={style.camera} />
                    <Text style={style.selecionada}>Conversas</Text>
                    <Text style={style.opcoes}>Status</Text>
                    <Text style={style.opcoes}>Chamadas</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}