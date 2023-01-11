import { FlatList, View, StyleSheet, Text } from 'react-native'
import { useLayoutEffect } from 'react';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data'

export default function MealsOverviewScreen({ route, navigation }){
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title;

        navigation.setOptions({ 
            title: categoryTitle
        });
    }, [catId, navigation])

    // function pressHandler(){
    //     navigation.navigate('MealsOverview');
    //   }    

    function renderMealItem(itemData){
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration, 
            complexity: item.complexity, 
            affordability: item. affordability
        };
        return <MealItem {...mealItemProps} />
    }
        return (
            <View style={styles.container}>
                <FlatList 
                    data={displayedMeals}
                    keyExtractor={(item)=> item.id}
                    renderItem={renderMealItem}
                />
            </View>);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16
        }
    });