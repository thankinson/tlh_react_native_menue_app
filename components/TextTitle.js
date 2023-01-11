import { Text, StyleSheet, View } from "react-native";

export default function TextTitle({children, subtitle, subtitleContainer}){
    return (
    <View style={[subtitleContainer]}>
        <Text style={[styles.title, subtitle]}>{children}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    }
})