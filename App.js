import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

import Main from './src/screens/MainScreen/Main';
import store from './src/redux/store';


export default function App() {
  
	return (
		<StoreProvider store={store}>
			<PaperProvider>
				<StatusBar style="light" />
				<Main />
			</PaperProvider>
		</StoreProvider>
	);
}