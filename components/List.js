import { Text, View, StyleSheet } from "react-native";

export default function List({selectedMeal}){
  return (
    selectedMeal.map((itemText) => 
      <View key={itemText} style={styles.listItem} >
          <Text style={styles.listText}>{itemText}</Text>
      </View>
    )
  )
}

const styles =  StyleSheet.create({
  listItem:{
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497'
  },
  listText:{
    color: '#351401',
    textAlign: 'center'
  }

})