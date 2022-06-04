import { useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignIn from '../AuthenticationScreen/SignIn';
import SignUp from '../AuthenticationScreen/SignUp';
import Home from '../HomeScreen/Home';
import Profile from '../ProfileScreen/Profile';
import { setUser } from '../../redux/authSlice';
import { Purple500, White } from '../../../common/color';


const Main = () => {

    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const Stack = createNativeStackNavigator();
	const Drawer = createDrawerNavigator();

    useLayoutEffect(() => {
        const fetchUser = async () => {
            const userString = await AsyncStorage.getItem("user");
            if(userString) {
                dispatch(setUser(JSON.parse(userString)))
            }
        }
        fetchUser();
    }, [])

	const appHeaderOptions = {
		headerStyle: {
			backgroundColor: Purple500
		}, 
		headerTintColor: White
	}

    return (
        <NavigationContainer>
            {
                !!user.uid ?
                <Drawer.Navigator initialRouteName="Home" screenOptions={appHeaderOptions}>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Profile" component={Profile} />
                </Drawer.Navigator> : 
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Login" component={SignIn} />
                    <Stack.Screen name="Register" component={SignUp} />
                </Stack.Navigator>
                
            }
        </NavigationContainer>
    )
}

export default Main;