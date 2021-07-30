import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    modalView: {
        justifyContent: 'space-evenly',
        height: '80%',
        width: '80%',
        margin: 20,
        backgroundColor: "#FDFDFB",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    textInputModal: {
        backgroundColor: "#ECECEC", width: Dimensions.get('window').width / 2, color: '#000',
    },
    cardButton: {
        marginTop: 20,
    }
})

export { styles }