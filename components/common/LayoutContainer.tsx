import { StyleSheet, View } from "react-native"
import { ReactNode } from "react"

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return <View style={styles.layoutContainer}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});