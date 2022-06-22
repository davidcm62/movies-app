import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { colors } from "../../constants/colors"
import { RootStackParamList } from "../../types";
import { CarouselItem } from "./CarouselItem";
import { useCategory } from "../../hooks/useCategory";

export const CategoryCarousel = ({
  categoryId,
  categoryName,
  navigation
}: {
  categoryId: string;
  categoryName: string;
  navigation: NativeStackNavigationProp<RootStackParamList, "Home", undefined>
}) => {
  const { categoryMovies } = useCategory(categoryId);

  return <View style={styles.wrapper}>
    <View style={styles.categoryTitleContainer}>
      <View style={styles.categoryTitleIndicator} />
      <Text style={styles.categoryTitleText}>{categoryName}</Text>
    </View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      style={{
        paddingHorizontal: 15
      }}
    >
      {categoryMovies.map(movie => <CarouselItem
        navigation={navigation}
        movieId={movie.id}
        movieTitle={`${movie.title} (${movie.year})`}
        movieImage={movie.image}
        key={movie.id}
      />)}
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20
  },
  categoryTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginBottom: 15
  },
  categoryTitleIndicator: {
    width: 5,
    height: 30,
    backgroundColor: colors.primaryColor,
    marginRight: 10
  },
  categoryTitleText: {
    fontWeight: "bold",
    fontSize: 25
  }
});