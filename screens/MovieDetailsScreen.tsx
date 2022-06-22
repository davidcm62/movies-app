import { Text, View } from "react-native";
import { LayoutContainer } from "../components/common/LayoutContainer";
import { RootStackScreenProps } from "../types";
import { BackgroundImage } from "../components/details/BackgroundImage";
import { MovieTitle } from "../components/common/MovieTitle";
import { MovieInfoFlexContainer } from "../components/details/MovieInfoFlexContainer";
import { InfoLabel } from "../components/details/InfoLabel";
import { ButtonAddFavourite } from "../components/details/ButtonAddFavourite";
import { LoadingIndicator } from "../components/common/LoadingIndicator";
import { useMovie } from "../hooks/useMovie";


export default function MovieDetailsScreen({ route, navigation }: RootStackScreenProps<"MovieDetails">) {
  const { movieId } = route.params;
  const { movie } = useMovie(movieId);


  return <LayoutContainer>
    {!movie ?
      <LoadingIndicator />
      :
      <>
        <BackgroundImage image={movie.image} navigation={navigation} />
        <View style={{ padding: 20 }}>
          <MovieTitle size={30} title={movie.title} />
          <MovieInfoFlexContainer stars={movie.stars} year={movie.year} />
          <View>
            <InfoLabel text="Descripción" />
            <Text style={{ fontSize: 18 }}>{movie.description}</Text>
          </View>
          <View style={{ marginTop: 25 }}>
            <ButtonAddFavourite />
          </View>
        </View>
      </>
    }
  </LayoutContainer>
}