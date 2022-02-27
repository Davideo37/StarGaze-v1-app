import { StyleSheet, Image, Pressable, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
let dayIndex = 0;
function MiniWeather(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.card}>
      <Pressable
        onPress={() => {
          dayIndex = props.index;
          navigation.navigate("Report");
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <View style={styles.card}>
          <Text style={styles.text}>Date: {props.data.date}</Text>
          <Text style={styles.text}>
            Weather: {props.data.hour[0].condition.text}
          </Text>
         
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https:" + props.data.hour[0].condition.icon }}
            />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
    height: 150,
    width: 150,
    paddingBottom: "5%",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    flexWrap: "wrap",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default MiniWeather;
export { dayIndex };