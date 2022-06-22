import { AntDesign } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"
import { InfoLabel } from "./InfoLabel"

export const MovieInfoFlexContainer = ({ year, stars }: { year: number, stars: number }) => {
  return <View style={styles.flexContainerWithBorders}>
    <View style={styles.halfWidth}>
      <InfoLabel text="Año" />
      <Text style={{ fontSize: 18 }}>{year}</Text>
    </View>
    <View style={styles.halfWidth}>
      <InfoLabel text="Puntuación" />
      <View style={styles.flexRowContainer}>
        <AntDesign name="star" size={20} color="#ebd234" />
        <Text style={{ fontSize: 18, marginLeft: 5 }}>{stars}</Text>
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  flexContainerWithBorders: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#e3e3e3",
    borderTopWidth: 2,
    borderTopColor: "#e3e3e3",
    marginVertical: 20,
    paddingVertical: 10
  },
  halfWidth: {
    width: "50%"
  },
  flexRowContainer: {
    flexDirection: "row",
    alignItems: "center",
  }
});