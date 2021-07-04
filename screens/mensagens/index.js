import React from 'react'
import { ScrollView, ImageBackground,Image,TextInput } from 'react-native'
import { style } from './style'

export function Mensagens() {
    const [text, onChangeText] = React.useState(null);

    return(
        <>
            <ScrollView>
                <ImageBackground source={require('../../assets/icons/backgound.png')} style={style.image} >

                    <Image source={require('../../assets/icons/Chat1.png')} style={style.envio1} />
                    <Image source={require('../../assets/icons/Chat2.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat3.png')} style={style.envio} />
                    <Image source={require('../../assets/icons/Chat4.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat5.png')} style={style.envio} />
                    <Image source={require('../../assets/icons/Chat6.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat7.png')} style={style.envio}  />
                    <Image source={require('../../assets/icons/Chat1.png')} style={style.envio} />
                    <Image source={require('../../assets/icons/Chat6.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat6.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat3.png')} style={style.envio} />
                </ImageBackground>
            </ScrollView>

            
            <TextInput onChangeText={onChangeText} value={text} style={style.caixaMensagens} placeholder='Digite uma mensagem' placeholderTextColor='grey' ></TextInput> 
        </>
    )

}