import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    buttonStyle: {
        padding: 10,
        marginBottom: 5,
        width: '100%',
        backgroundColor: '#f4f186',
        alignItems: 'center',
    },
    cardContent: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#FDFD96',
        borderRadius: 10,
        borderColor: '#d2b55b',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 5
    },
    contentStyle: {
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    textCard: {
        color: '#3A3B3C',
        letterSpacing: .6,
        fontSize: 17
    }
})

export { styles }