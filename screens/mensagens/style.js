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
        height: 45,
        margin: 12,
        backgroundColor: '#ffffff',
        color: 'black',
        borderRadius: 30,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,

        width: 300,
        paddingLeft: 40,
        marginTop: 565,
        fontSize: 18,
        marginLeft: 5
    },
    emoji: {
        width: 22,
        height: 22,

        position: 'absolute',
        marginTop: 576,
        marginLeft: 14,
        elevation:10
    },
    clip: {
        width: 22,
        height: 22,

        position: 'absolute',
        marginTop: 576,
        marginLeft: 226,
        elevation: 10
    },
    camera: {
        width: 20,
        height: 20,

        position: 'absolute',
        marginTop: 578,
        elevation: 10,
        marginLeft: 270
    },
    micro: {
        width: 50,
        height: 50,

        position: 'absolute',
        marginTop: 566,
        marginLeft: 307
    }
})