import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    modalView: {
        justifyContent: 'space-evenly',
        height: '90%',
        width: '80%',
        margin: 10,
        backgroundColor: "#FDFDFB",
        borderRadius: 20,
        padding: 15,
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
        paddingHorizontal: 40,
        paddingVertical: 10,
        elevation: 2,
        margin: 10,
    },
    buttonClose: {
        backgroundColor: "orange",
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
    },
    contentContainerStyle: {
        justifyContent: 'space-evenly',
        flex: 1,
        alignItems: 'center'
    },
    imageSize: {
        width: 150,
        height: 150
    },
    cardTitle: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#f4f186',
        backgroundColor: '#f4f186',
        borderRadius: 10,
        marginBottom: 10
    },
    contentTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        textTransform: 'uppercase',
        color: '#3A3B3C',
        fontStyle: 'italic'
    },
    contentStyle: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f4f186',
        backgroundColor: '#f4f186',
        width: 250
    },
    contentTitleStyle: {
        color: '#3A3B3C',
        fontWeight: '700',
        fontStyle: 'italic'
    },
    pokemonTypeStyle: {
        fontStyle: 'italic',
        color: '#3A3B3C'
    },

})

export { styles }