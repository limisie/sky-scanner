import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/screens/Home';
import SearchScreen from './components/screens/SearchScreen';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
    }
};

const App = () => {
    const [loaded] = useFonts({
        MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
        MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
        MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
        MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    });
    
    if (!loaded) {
        return null;
    } else {
        return (
            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    screenOptions={{headerShown: false}}
                    initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Search" component={SearchScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};

export default App;