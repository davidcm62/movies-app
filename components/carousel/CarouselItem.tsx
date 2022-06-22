import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../../types"
import { MovieTitle } from "../common/MovieTitle"

export const CarouselItem = ({
  navigation,
  movieTitle,
  movieId,
  movieImage,
}: {
  movieTitle: string,
  movieId: string,
  movieImage: ImageSourcePropType,
  navigation: NativeStackNavigationProp<RootStackParamList, "Home", undefined>
}) => {
  return <TouchableOpacity onPress={() => navigation.navigate("MovieDetails", { movieId: movieId })} style={{ marginRight: 15 }}>
    <View style={{
      width: 120
    }}>
      <Image source={movieImage} style={styles.image} resizeMode="cover" />
      <MovieTitle title={movieTitle} size={18} />
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    width: "100%",
    marginBottom: 10
  }
});