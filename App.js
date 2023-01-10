import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen from './components/ui/Screen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <Screen>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    </Screen>

  );
}

const styles = StyleSheet.create({

});
