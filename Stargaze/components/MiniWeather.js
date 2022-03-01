import { StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
let dayIndex = 0;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Nov", "Dec"];
function MiniWeather(props) {
  const navigation = useNavigation();
  const dateString = props.data.date;
  return (
    <View style={{backgroundColor: "transparent"}}>
      <Pressable
        onPress={() => {
          dayIndex = props.index;
          navigation.navigate("Report");
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          backgroundColor: "transparent",
        })}
      >
        <View style={styles.card}>
          <Text style={styles.text}>{formatDate(dateString)}</Text>
          <Text style={styles.text}>
            {props.data.hour[0].condition.text}
          </Text>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https:" + props.data.hour[0].condition.icon }}
            />
        </View>
      </Pressable>
    </View>
  );
}

export function formatDate(date) {
  let pieces = date.split("-")
  let month = pieces[1]
  let day = pieces[2]
  return months[parseInt(month)-1] + ", " + day;
}
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    backgroundColor: "#13272b",
    borderWidth: 3,
    borderColor: "#1fb77a",
    height: 130,
    width: 140,
    paddingBottom: "5%",
    borderRadius: 10,
    marginTop: 50,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    paddingBottom: 10,
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    flexWrap: "wrap",
    padding: "auto",
    backgroundColor: "transparent",
    borderRadius: 2,
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default MiniWeather;
export { dayIndex };