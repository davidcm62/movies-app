import { StyleSheet, Text } from "react-native"

export const LoadingIndicator = () => {
  return <Text style={styles.textCenterFullWidth}>Cargando...</Text>
}

const styles = StyleSheet.create({
  textCenterFullWidth: {
    width: "100%",
    textAlign: "center"
  }
});