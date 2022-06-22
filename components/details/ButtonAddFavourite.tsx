import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { colors } from "../../constants/colors";

export const ButtonAddFavourite = () => {
  return <TouchableHighlight onPress={() => { console.log("añadido!") }} style={styles.button}>
    <View style={styles.contentContainer}>
      <Ionicons name="md-bookmark-outline" size={24} color={colors.primaryColor} />
      <Text style={styles.buttonText}>Añadir a favoritos</Text>
    </View>
  </TouchableHighlight>
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: "#329ba8",
    borderRadius: 9999,
    padding: 6,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primaryColor
  }
});