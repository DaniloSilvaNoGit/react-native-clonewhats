import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'

import { style } from './style'

export function Contatos() {
    return(
            <ScrollView>
                <TouchableOpacity style={style.contato}>

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
                            <Text style={style.mensagem} >Lorem Ipsum</Text>
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
                            <Image source={require('../../assets/icons/Check2.png')} style={style.check} />
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
    )
}