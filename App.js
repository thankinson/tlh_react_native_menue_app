import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

import FavoritesContextProvider from './store/context/favorites-context';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {

  function DrawNavigator(){
    return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: { backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}>

      <Drawer.Screen 
        name='Catagories' 
        component={CategoriesScreen} 
        options={{
          title: 'All Catagories',
          drawerIcon: ({color, size})=> <Ionicons name='list' color={color} size={size}/>
        }}  />
      <Drawer.Screen 
        name='Favorites' 
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size})=> <Ionicons name='star' color={color} size={size}/>
        }}
        />
    </Drawer.Navigator>
    )
  }

  return (

  <>
    <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'}
            }}
          >
            <Stack.Screen 
              name='Drawer' 
              component={DrawNavigator} 
              options={{
                headerShown: false
              }} />
            <Stack.Screen 
              name='MealsOverview' 
              component={MealsOverviewScreen} 
              // options={({route, navigation})=>{
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   }
              // }}            
              />
              <Stack.Screen 
                name='MealDetail' 
                component={MealDetailScreen}
                options={{
                  title: 'About the Meal'
                }} 
                // options={
                //   {headerRight: () => {
                //     return <Button title='Tap Me' />
                //     }}
                // }
              />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
  </>

  );
}

const styles = StyleSheet.create({

});
