import { useState } from 'react';
import { View, Pressable } from 'react-native';
import { Button, Card, TextInput, Paragraph } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginUser } from '../../firebase/auth';
import { setUser } from '../../redux/authSlice';
import { validateEmail, validatePassword } from '../../../common/utils';
import AuthenticationStyles from './styles';


const SignUp = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [emailHasError, setEmailHasError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordHasError, setPasswordHasError] = useState(false);

    const dispatch = useDispatch();

    const onLoginUser = () => {
        if(!email || email.length===0 || !validateEmail(email)) {
            setEmailHasError(true);
            return;
        } else {
            setEmailHasError(false);
        }
         if(!password || !validatePassword(password)) {
            setPasswordHasError(true);
            return;
        } else { 
            setPasswordHasError(false);
        }
        loginUser(email, password)
            .then(userCredential => {
                const user = {
                    uid: userCredential.user.uid,
                    displayName: userCredential.user.displayName,
                    email: userCredential.user.email,
                    phoneNumber: userCredential.user.phoneNumber,
                    photoURL: userCredential.user.photoURL,
                }
                dispatch(setUser(user));
                try {
                    AsyncStorage.setItem("user", JSON.stringify(user));
                } catch(error) {
                    console.log(error);
                }
            })
            .catch(error => console.log(error.code + " "+ error.message))
    }

    const navigateToRegistrationPage = () => navigation.navigate('Register');

    return (
        <View style={AuthenticationStyles.container}>
            <Card>
                <Card.Title title="Sign In to Continue..." />
                <Card.Content>
                    <TextInput mode="outlined" label="Email" value={email}
                        onChangeText={setEmail} error={emailHasError} />
                    <TextInput mode="outlined" label="Password" value={password}
                        onChangeText={setPassword} error={passwordHasError} />
                    <Button style={AuthenticationStyles.actionButton} mode="contained" onPress={onLoginUser}>
                        Log In
                    </Button>
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