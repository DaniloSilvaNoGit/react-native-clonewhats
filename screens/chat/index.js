import React from 'react'
import { View, Image} from 'react-native'

import { style } from './style'
import { Header } from '../../components/header'
import { Contatos } from '../../components/contatos'

export function Chat() {
    return(
        <View style={style.tudo}>
            <Header />
            <Contatos />
            <Image source={require('../../assets/icons/ConversaZap.png')} style={style.botao}  />
        </View>
    )
}