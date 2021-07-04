import { StyleSheet} from "react-native";

export const style = StyleSheet.create({
    header: {
        backgroundColor: '#075f58',
        height: 90,
        padding: 10,
        flexDirection: 'row'
    },

    botaoVolta: {
        flexDirection: 'row',
    },
    volta: {
        width: 19,
        height: 19,
        marginTop: 40,
    },
    foto: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginTop: 30,
        marginLeft: 10
    },

    nome: {
        color: '#ffffff',
        marginTop:30,
        marginLeft: 10,
        fontWeight: '700',
        fontSize: 20
    },
    status: {
        color: '#ffffff',
        marginLeft: 10,
        fontSize: 15
    },

    canto: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 70
    },
    camera: {
        width: 23,
        height: 23,
    },
    telefone: {
        width:23,
        height:23,
        marginLeft: 30
    },
    menu: {
        width: 20,
        height: 20,
        marginLeft:20
    }
})