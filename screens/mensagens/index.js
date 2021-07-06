import React from 'react'
import { ScrollView, ImageBackground,Image,TextInput, View, Text } from 'react-native'
import { style } from './style'

export function Mensagens() {
    const [text, onChangeText] = React.useState(null);

    return(
        <>
            <ImageBackground source={require('../../assets/icons/backgound.png')} style={style.image} >
                <ScrollView style={style.mensagens} >

                    <View>
                        <Image source={require('../../assets/icons/Chat1.png')} style={style.envio1} />
                        <Text style={style.mensagem1}>Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Pellentesque eu sodales elit.</Text>
                        <Text style={style.data1}>22:19</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat2.png')} style={style.recebido} />
                        <Text style={style.mensagem2}>Mussum Ipsum, cacilds.</Text>
                        <Text style={style.data2}>22:21</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat3.png')} style={style.envio} />
                        <Text style={style.mensagem3}>Lorem Ipsum is.</Text>
                        <Text style={style.data3}>22:22</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat4.png')} style={style.recebido} />
                        <Text style={style.mensagem4}>Lorem ipsum dolor.</Text>
                        <Text style={style.data4}>23:34</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat5.png')} style={style.envio} />
                        <Text style={style.mensagem5}>Lorem ipsum.</Text>
                        <Text style={style.data5}>23:35</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat6.png')} style={style.recebido} />
                        <Text style={style.mensagem6}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={style.data6}>23:35</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat7.png')} style={style.envio}  />
                        <Text style={style.mensagem7}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={style.data7}>00:01</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat1.png')} style={style.envio} />
                        <Text style={style.mensagem8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci ex, eleifend vitae est non, aliquam molestie erat. Donec aliquet fringilla lacinia.</Text>
                        <Text style={style.data8}>00:01</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat6.png')} style={style.recebido} />
                        <Text style={style.mensagem6}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={style.data6}>00:21</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat4.png')} style={style.recebido} />
                        <Text style={style.mensagem4}>Lorem ipsum dolor.</Text>
                        <Text style={style.data4}>00:21</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat3.png')} style={style.envio} />
                        <Text style={style.mensagem3}>Lorem ipsum.</Text>
                        <Text style={style.data3}>00:22</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat4.png')} style={style.recebido} />
                        <Text style={style.mensagem4}>Lorem ipsum dolor.</Text>
                        <Text style={style.data4}>00:31</Text>
                    </View>

                    
                    <View>
                        <Image source={require('../../assets/icons/Chat6.png')} style={style.recebido} />
                        <Text style={style.mensagem6}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={style.data6}>00:35</Text>
                    </View>

                    <View>
                        <Image source={require('../../assets/icons/Chat1.png')} style={style.envio1} />
                        <Text style={style.mensagem1}>Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Pellentesque eu sodales elit.</Text>
                        <Text style={style.data1}>00:40</Text>
                    </View>
                    
                    <View>
                        <Image source={require('../../assets/icons/Chat6.png')} style={style.recebido} />
                        <Text style={style.mensagem6}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={style.data6}>00:41</Text>
                    </View>
                </ScrollView>
            </ImageBackground>

            <TextInput onChangeText={onChangeText} value={text} style={style.caixaMensagens} placeholder='Digite uma mensagem' placeholderTextColor='#bbbbbb' autoCorrect={true} ></TextInput> 
                <Image source={require('../../assets/icons/clip.png')} style={style.clip} />    
                <Image source={require('../../assets/icons/CameraZapChat.png')} style={style.camera} />
                <Image source={require('../../assets/icons/Emoji.png')} style={style.emoji} />
            <Image source={require('../../assets/icons/MicroZap.png')} style={style.micro} />
        </>
    )

}