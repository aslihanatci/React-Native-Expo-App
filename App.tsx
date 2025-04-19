import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './screens/HomeScreen';
import InputScreen from './screens/InputScreen';
import OutputScreen from './screens/OutputScreen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
  return Font.loadAsync({
    'Manrope-ExtraBold': require('./assets/fonts/Manrope-VariableFont_wght.ttf'),
  });
};

export type RootStackParamList = {
  Input: undefined;
  Output: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Manrope-ExtraBold': require('./assets/fonts/Manrope-VariableFont_wght.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Input" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Input" component={InputScreen} />
      <Stack.Screen name="Output" component={OutputScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

