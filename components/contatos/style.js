import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

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
    mensagem: {
        color: '#898b8a',
        marginLeft: 4
    }
    
})