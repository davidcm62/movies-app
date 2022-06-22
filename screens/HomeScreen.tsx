import { RootStackScreenProps } from "../types";
import { LayoutContainer } from "../components/common/LayoutContainer";
import { Header } from "../components/common/Header";
import { CategoryCarousel } from "../components/carousel/CategoryCarousel";

export default function HomeScreen({ navigation }: RootStackScreenProps<"Home">) {
  return <LayoutContainer>
    <Header />
    <CategoryCarousel categoryId="1" categoryName="Acción" navigation={navigation} />
    <CategoryCarousel categoryId="2" categoryName="Drama" navigation={navigation} />
    <CategoryCarousel categoryId="3" categoryName="Aventuras" navigation={navigation} />
    <CategoryCarousel categoryId="4" categoryName="Comedia" navigation={navigation} />
  </LayoutContainer>
}