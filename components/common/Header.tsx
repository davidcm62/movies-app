import { Image, StyleSheet, View } from "react-native"

export const Header = () => {
  return <View style={styles.header}>
    <Image
      source={require("../../assets/images/logo.svg")}
      resizeMode="contain"
      style={styles.headerImage}
    />
  </View>
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20
  },
  headerImage: {
    height: 35,
    marginVertical: 15
  }
});