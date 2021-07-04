import React from 'react'
import { View, Image, ScrollView, TouchableOpacity, Text} from 'react-native'

import { style } from './style'
import { Header } from '../../components/header'
import { Contatos } from '../../components/contatos'

export function Chat({navigation}) {
    return(
        <View style={style.tudo}>
                <ScrollView>
                <TouchableOpacity style={style.contato} onPress={ () => navigation.navigate('Mensagens') } >

                    <Image source={require('../../assets/icons/PerfilZap.png')} style={style.fotoPerfil} />

                    <View style={style.conteudo} >
                        <View style={style.linha1}>
                            <Text style={style.nome} >Pessoa 1</Text>
                            <Text style={style.hora} >00:42</Text>
                        </View>
                        
                        <View style={style.linha2}>
                            <Image source={require('../../assets/icons/Check1.png')} style={style.check} />
                            <Text style={style.mensagem} >Lorem Ipsum</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.contato}>

                    <Image source={require('../../assets/icons/PerfilZap.png')} style={style.fotoPerfil} />

                    <View style={style.conteudo} >
                        <View style={style.linha1}>
                            <Text style={style.nome} >Pessoa 2</Text>
                            <Text style={style.hora} >00:22</Text>
                        </View>
                        
                        <View style={style.linha2}>
                            <Text style={style.mensagem} numberOfLines={1} ellipsizeMode="tail" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tincidunt libero. Duis sapien massa, aliquam at ante ac, laoreet vestibulum diam. Praesent rhoncus iaculis rutrum. In hac habitasse platea dictumst. Vivamus laoreet ante in nisl pharetra, ac iaculis ante condimentum. Nullam vel molestie odio. Cras semper nec risus id ullamcorper. Vestibulum tempus ultricies ligula ac venenatis.</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.contato}>

                    <Image source={require('../../assets/icons/PerfilZap.png')} style={style.fotoPerfil} />

                    <View style={style.conteudo} >
                        <View style={style.linha1}>
                            <Text style={style.nome} >Pessoa 3</Text>
                            <Text style={style.hora} >23:54</Text>
                        </View>
                        
                        <View style={style.linha2}>
                            <Image source={require('../../assets/icons/Check3.png')} style={style.check} />
                            <Text style={style.mensagem} >Mussum Ipsum</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.contato}>

                    <Image source={require('../../assets/icons/PerfilZap.png')} style={style.fotoPerfil} />

                    <View style={style.conteudo} >
                        <View style={style.linha1}>
                            <Text style={style.nome} >Pessoa 4</Text>
                            <Text style={style.hora} >Ontem</Text>
                        </View>
                        
                        <View style={style.linha2}>
                            <Image source={require('../../assets/icons/ImagemWhatsapp.png')} style={style.fotoEnvio} />
                            <Text style={style.mensagem} >Lorem Ipsum</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.contato}>

                    <Image source={require('../../assets/icons/PerfilZap.png')} style={style.fotoPerfil} />

                    <View style={style.conteudo} >
                        <View style={style.linha1}>
                            <Text style={style.nome} >Pessoa 5</Text>
                            <Text style={style.hora} >Ontem</Text>
                        </View>
                        
                        <View style={style.linha2}>
                            <Image source={require('../../assets/icons/Check1.png')} style={style.check} />
                            <Image source={require('../../assets/icons/ImagemWhatsapp.png')} style={style.fotoEnvio} />
                            <Text style={style.mensagem} >Mussum Ipsum</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.contato}>

                    <Image source={require('../../assets/icons/PerfilZap.png')} style={style.fotoPerfil} />

                    <View style={style.conteudo} >
                        <View style={style.linha1}>
                            <Text style={style.nome} >Pessoa 6</Text>
                            <Text style={style.hora} >Ontem</Text>
                        </View>
                        
                        <View style={style.linha2}>
                            <Image source={require('../../assets/icons/Check3.png')} style={style.check} />
                            <Text style={style.mensagem} >Lorem Ipsum</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.contato}>

                    <Image source={require('../../assets/icons/PerfilZap.png')} style={style.fotoPerfil} />

                    <View style={style.conteudo} >
                        <View style={style.linha1}>
                            <Text style={style.nome} >Pessoa 7</Text>
                            <Text style={style.hora} >01/07/2021</Text>
                        </View>
                        
                        <View style={style.linha2}>
                            <Image source={require('../../assets/icons/Check3.png')} style={style.check} />
                            <Text style={style.mensagem} >Mussum Ipsum</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                    <TouchableOpacity style={style.contato}>

                        <Image source={require('../../assets/icons/PerfilZap.png')} style={style.fotoPerfil} />

                        <View style={style.conteudo} >
                            <View style={style.linha1}>
                                <Text style={style.nome} >Pessoa 8</Text>
                                <Text style={style.hora} >01/07/2021</Text>
                            </View>
                            
                            <View style={style.linha2}>
                                <Image source={require('../../assets/icons/Check3.png')} style={style.check} />
                                <Text style={style.mensagem} >Mussum Ipsum</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                <TouchableOpacity style={style.contato}>

                    <Image source={require('../../assets/icons/PerfilZap.png')} style={style.fotoPerfil} />

                    <View style={style.conteudo} >
                        <View style={style.linha1}>
                            <Text style={style.nome} >Alien 1</Text>
                            <Text style={style.hora} >30/06/2021</Text>
                        </View>
                        
                        <View style={style.linha2}>
                            <Image source={require('../../assets/icons/Check3.png')} style={style.check} />
                            <Text style={style.mensagem} >Mussum Ipsum</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <Image source={require('../../assets/icons/ConversaZap.png')} style={style.botao} />
        </View>
    )
}