import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import MealList from "../components/MealsList/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
// import { FavoritesContext } from '../store/context/favorites-context'

export default function FavoritesScreen(){
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

  const favoritesMeals = MEALS.filter((meal) => 
    // favoriteMealCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)

  );

  if (favoritesMeals.length === 0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          No favorite meals!
        </Text>
      </View>
    )
  } else {
    return <MealList items={favoritesMeals}/>
  }

};

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})