import React from 'react'
import { ScrollView, ImageBackground,Image,TextInput } from 'react-native'
import { style } from './style'

export function Mensagens() {
    const [text, onChangeText] = React.useState(null);

    return(
        <>
            <ImageBackground source={require('../../assets/icons/backgound.png')} style={style.image} >
                <ScrollView style={style.mensagens} >

                    <Image source={require('../../assets/icons/Chat1.png')} style={style.envio1} />
                    <Image source={require('../../assets/icons/Chat2.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat3.png')} style={style.envio} />
                    <Image source={require('../../assets/icons/Chat4.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat5.png')} style={style.envio} />
                    <Image source={require('../../assets/icons/Chat6.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat7.png')} style={style.envio}  />
                    <Image source={require('../../assets/icons/Chat1.png')} style={style.envio} />
                    <Image source={require('../../assets/icons/Chat6.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat4.png')} style={style.recebido} />
                    <Image source={require('../../assets/icons/Chat3.png')} style={style.envio} />
                    
                </ScrollView>
            </ImageBackground>

            <Image source={require('../../assets/icons/Emoji.png')} style={style.emoji} />
            <TextInput onChangeText={onChangeText} value={text} style={style.caixaMensagens} placeholder='Digite uma mensagem' placeholderTextColor='#bbbbbb' ></TextInput> 
            <Image source={require('../../assets/icons/clip.png')} style={style.clip} />
            <Image source={require('../../assets/icons/CameraZapChat.png')} style={style.camera} />
            <Image source={require('../../assets/icons/MicroZap.png')} style={style.micro} />
        </>
    )

}