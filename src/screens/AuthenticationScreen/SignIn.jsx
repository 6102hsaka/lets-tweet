import { useState } from 'react';
import { View, Pressable } from 'react-native';
import { Button, Card, TextInput, Paragraph } from 'react-native-paper';

import AuthenticationStyles from './styles';


const SignUp = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigateToRegistrationPage = () => navigation.navigate('Register');

    return (
        <View style={AuthenticationStyles.container}>
            <Card>
                <Card.Title title="Sign In to Continue..." />
                <Card.Content>
                    <TextInput mode="outlined" label="Email" value={email} onChangeText={setEmail} />
                    <TextInput mode="outlined" label="Password" value={password} onChangeText={setPassword} />
                    <Button style={AuthenticationStyles.actionButton} mode="contained">Log In</Button>
                </Card.Content>
                <Pressable onPress={navigateToRegistrationPage}>
                    <Paragraph style={AuthenticationStyles.navigationLink}>
                        New User? Create Account
                    </Paragraph>
                </Pressable>
            </Card>
        </View>
    )
}

export default SignUp;