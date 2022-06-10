import { useState } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { updateUserProfile } from '../../firebase/auth';
import { setUser } from '../../redux/authSlice';
import { Purple500, Grey700 } from '../../../common/color';


const Profile = () => {

    const user = useSelector(state => state.auth.user);

    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

    const dispatch = useDispatch();

    const onUpdateProfile = () => {
        const updatedUser = {}
        if(name) {
            updatedUser['displayName'] = name;
        }
        if(phoneNumber) {
            updatedUser['phoneNumber'] = phoneNumber;
        }
        updateUserProfile(updatedUser)
            .then(() => {
                const updatedUserDetail = {...user};
                if(name) {
                    updatedUserDetail.displayName = name;
                }
                if(phoneNumber) {
                    updatedUserDetail.phoneNumber = phoneNumber;
                }
                dispatch(setUser(updatedUserDetail));
                try {
                    AsyncStorage.setItem("user", JSON.stringify(updatedUserDetail));
                } catch(error) {
                    console.log(error);
                }
            })
            .catch(error => console.log(error.code + " "+ error.message))
    }

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD--YDqvg7HX_8nkinu7ADr1D9KZaR6kUZuw&usqp=CAU"}} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} label="Name" mode="outlined"
                    value={name} onChangeText={text => setName(text)}
                    left={<TextInput.Icon name="account" color={isFocused => isFocused?Purple500:Grey700} />} />
                <TextInput style={styles.input} label="Email" mode="outlined"
                    value={email} onChangeText={text => setEmail(text)}
                    disabled={true} left={<TextInput.Icon name="email" color={isFocused => isFocused?Purple500:Grey700} />} />
                <TextInput style={styles.input} label="Phone Number" mode="outlined" 
                    value={phoneNumber} onChangeText={text => setPhoneNumber(text)}
                    left={<TextInput.Icon name="phone" color={isFocused => isFocused?Purple500:Grey700} />} />
                <Button style={styles.input} onPress={onUpdateProfile}>
                    Update Profile
                </Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 80,
    },
    inputContainer: {
        marginHorizontal: 20
    },
    input: {
        marginVertical: 4
    },
});

export default Profile;