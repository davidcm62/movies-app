import { StyleSheet, Text } from "react-native"

export const InfoLabel = ({ text }: { text: string }) => {
  return <Text style={styles.label}>{text}</Text>
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5
  }
});