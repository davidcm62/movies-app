import { AntDesign } from "@expo/vector-icons"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ImageBackground, ImageSourcePropType, StyleSheet, TouchableHighlight } from "react-native"
import { RootStackParamList } from "../../types"

export const BackgroundImage = ({
  image,
  navigation
}: {
  image: ImageSourcePropType,
  navigation: NativeStackNavigationProp<RootStackParamList, "MovieDetails", undefined>
}) => {

  return <ImageBackground
    source={image}
    resizeMode="cover"
    style={styles.imageContainer}
  >
    <TouchableHighlight onPress={() => navigation.goBack()} style={styles.goBackButton}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableHighlight>
  </ImageBackground>
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    height: 400
  },
  goBackButton: {
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "absolute",
    padding: 6,
    borderRadius: 4,
    top: 10,
    left: 10
  }
});
