import { View, StyleSheet } from "react-native";

export default function Screen({children}){
    return (
        <View style={styles.screen}>{children}</View>
        );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    }
});