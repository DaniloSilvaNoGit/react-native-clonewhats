import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({

    tudo: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    
    botao: {
        position: 'absolute',
        width:55,
        height: 55,
        marginTop: 478,
        marginLeft: 290,
    },
        contato: {
        padding: 15,
        flexDirection: 'row',
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 50
    },

    conteudo: {
        marginLeft: 8
    },

    linha1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 270,
        paddingTop: 7
    },

    nome: {
        fontSize: 18,
        fontWeight: '700'
    },  

    hora: { 
        fontSize: 12,
        color: 'grey',
        alignSelf: 'center'
    },

    linha2: {
        flexDirection: 'row',
    },

    check: {
        width: 15,
        height: 15
    },
    fotoEnvio: {
        width:13,
        height: 13,
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    mensagem: {
        color: '#898b8a',
        marginLeft: 4,
        width: 270
    }
})

