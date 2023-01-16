import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native";

import MealDetail from "../MealDetail";

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }){
  
  const navigation = useNavigation();

  function pressHandler(){
    navigation.navigate('MealDetail', {
      mealId: id,
    });
    }    

  return (
      <View style={styles.MealItem}>
          <Pressable  
              android_ripple={{color: '#ccc'}}
              style={({pressed}) => 
                  pressed ? styles.buttonPressed : null} 
              onPress={pressHandler}
              >
              <View>
                  <View>
                      <Image source={{uri: imageUrl}} style={styles.image} />
                      <Text style={styles.title} >{title}</Text>
                  </View>
                <MealDetail duration={duration} complexity={complexity} affordability={affordability} />
              </View>
          </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },
})