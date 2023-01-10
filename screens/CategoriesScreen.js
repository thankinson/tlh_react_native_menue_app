import { FlatList } from 'react-native'

import CategoriesGridTile from '../components/CategoryGridTile'

import { CATEGORIES } from '../data/dummy-data'


export default function CategoriesScreen({ navigation }){
        function renderCatagoryItem(itemData){
                function presshandler(){
                        navigation.navigate('MealsOverview', {
                                categoryId: itemData.item.id
                        });
                }    
                return <CategoriesGridTile 
                        title={itemData.item.title}
                        color={itemData.item.color} 
                        onPress={presshandler} />
            }
            
  
  
  return <FlatList 
          data={ CATEGORIES } 
          keyExtractor={(item)=> item.id} 
          renderItem={renderCatagoryItem}
          numColumns={2}
          />

};