import { useLayoutEffect, useEffect, useContext } from "react";
import { View, StyleSheet, Image, ScrollView} from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from '../store/context/favorites-context'


import MealDetail from "../components/MealDetail";
import TextTitle from "../components/TextTitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({route, navigation }){

    const favoriteMealCtx = useContext(FavoritesContext);
    
    const mealId = route.params.mealId;
    
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId);

    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

    function changeFavoritePressHandler(){
      if (mealIsFavorite){
        favoriteMealCtx.removeFaorite(mealId);
      } else {
        favoriteMealCtx.addFavorite(mealId);
      }
    }

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight: ()=> {
          return <IconButton 
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color= 'white'
          onPress={changeFavoritePressHandler}/>
        }
      })
    },[navigation, changeFavoritePressHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl }}/>
            <TextTitle>
                {selectedMeal.title}
            </TextTitle>
            {/* ####### */}
            <MealDetail 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText} />
            {/* ######## */}
            <View style={styles.listOutercontainer}>
                <View style={styles.listContainer}>
                    <TextTitle  subtitle={styles.subtitle} subtitleContainer={styles.subtitleContainer}>
                        Ingrediants
                    </TextTitle>
                    <List selectedMeal={selectedMeal.ingredients} />
                    {/* {selectedMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)} */}
                    <TextTitle  subtitle={styles.subtitle} subtitleContainer={styles.subtitleContainer}>
                        Steps
                    </TextTitle>
                    <List selectedMeal={selectedMeal.steps} />
                    {/* {selectedMeal.steps.map((step)=> <Text key={step}>{step}</Text>)} */}
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image:{
        width: '100%',
        height: 350,
    },
    detailText:{
        color: 'white',
    },
    subtitle:{
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitleContainer:{
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    },
    listContainer: {
        width: '80%',
    },
    listOutercontainer:{
        alignItems: 'center'
    }
})