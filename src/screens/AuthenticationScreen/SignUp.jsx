import { useState } from 'react';
import { View, Pressable } from 'react-native';
import { Button, Card, TextInput, Paragraph } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import AuthenticationStyles from './styles';
import { register } from '../../redux/authSlice';


const SignIn = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const onRegisterUser = () => {
        if(email && password) {
            dispatch(register(email));
        }
    }

    const navigateToLoginPage = () => navigation.navigate('Login');

    return (
        <View style={AuthenticationStyles.container}>
            <Card>
                <Card.Title title="Sign Up to Continue..." />
                <Card.Content>
                    <TextInput mode="outlined" label="Email" value={email} onChangeText={setEmail} />
                    <TextInput mode="outlined" label="Password" value={password} onChangeText={setPassword} />
                    <Button style={AuthenticationStyles.actionButton} mode="contained" onPress={onRegisterUser}>
                        Register
                    </Button>
                </Card.Content>
                <Pressable onPress={navigateToLoginPage}>
                    <Paragraph style={AuthenticationStyles.navigationLink}>
                        Existing User? Already have Account
                    </Paragraph>
                </Pressable>
            </Card>
        </View>
    )
}

export default SignIn;