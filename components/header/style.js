import React from 'react'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({

    header: {
        backgroundColor: '#075E54',
        height: 150,
        padding: 10,
        paddingTop: 60,
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        
        elevation: 15,
    },

    superior: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    titulo: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: '700',
        paddingLeft: 10
    },
    botoes: {
        flexDirection: 'row',
    },
    lupa: {
        height: 20,
        width: 20,
        marginRight: 27
    },
    menu: {
        height: 20,
        width: 20,
    },

    paginas: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
    },
    camera: {
        width:30,
        height: 20,
    },
    opcoes: {
        color: '#669991',
        fontSize: 16,
        width: 100,
        textAlign: 'center',
        fontWeight: '700'
    },
    selecionada: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        width: 100,
        height: 30,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
    }
})
