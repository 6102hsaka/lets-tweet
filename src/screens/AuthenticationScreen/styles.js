import { StyleSheet } from 'react-native';
import { Purple700 } from '../../../common/color';

const AuthenticationStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    actionButton: {
        marginTop: 8,
    }, 
    navigationLink: {
        marginVertical: 16,
        textAlign: 'center',
        color: Purple700
    }
});

export default AuthenticationStyles;
    