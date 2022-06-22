import { Text } from "react-native"
import { capitalizeText } from "../../utils"

export const MovieTitle = ({ size, title }: { size: number, title: string }) => {
  return <Text style={{ fontWeight: "bold", fontSize: size }}>{capitalizeText(title)}</Text>
}