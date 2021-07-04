import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        height: 618,
        width: 360,
    },

    envio1: {
        marginTop: 15,
        alignSelf: 'flex-end'
    },
    envio: {
        alignSelf: 'flex-end'
    },
    caixaMensagens: {
        position: 'absolute',
        height: 40,
        margin: 12,
        backgroundColor: '#ffffff',
        color: 'black',
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,

        width: 280,
        paddingLeft: 10,
        marginTop: 570
    }
})