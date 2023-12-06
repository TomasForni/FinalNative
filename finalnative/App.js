import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer }  from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import DatosScreen from './src/screens/DatosScreen';
import ResultadoScreen from './src/screens/ResultadoScreen';

const Stack = createStackNavigator();
export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DatosScreen">
          <Stack.Screen name="DatosScreen" component={DatosScreen}
          options={{ headerShown: false, headerStyle: { backgroundColor: '#f0f0f0' } }} />
          <Stack.Screen name="ResultadoScreen" component={ResultadoScreen}
          options={({ navigation }) => ({
            title: 'ResultadoScreen',
            headerStyle: { backgroundColor: '#f0f0f0' }, })} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};