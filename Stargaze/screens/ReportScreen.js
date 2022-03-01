import {
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Text, View } from "../components/Themed";
import checkWeather from "../hooks/checkWeather";
import { formatDate } from "../components/MiniWeather";
const image = "../assets/images/background.jpg";

export default function ReportScreen(props) {
  if (props.weatherData.forecast) {
    // Only render if weatherdata exists
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(image)}
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.title}> Weather Report</Text>
          <Text style={styles.header}>
            Location:
            {" " +
              props.weatherData.location.name +
              ", " +
              props.weatherData.location.region}
          </Text>
          <View style={styles.card}>
            <Text style={styles.report}>
              {formatDate(
                props.weatherData.forecast.forecastday[props.dayIndex].date
              )}
            </Text>
            <Text style={styles.report}>
              Temp:{" "}
              {props.weatherData.forecast.forecastday[props.dayIndex].hour[0]
                .temp_f +
                "° F"}
            </Text>
            <Text style={styles.report}>
              Condition:{" "}
              {
                props.weatherData.forecast.forecastday[props.dayIndex].hour[0]
                  .condition.text
              }
            </Text>
            <Image
              style={styles.weatherImage}
              source={{
                uri:
                  "https:" +
                  props.weatherData.forecast.forecastday[props.dayIndex].hour[0]
                    .condition.icon,
              }}
            />
            <Text style={styles.report}>
              {checkWeather(
                props.weatherData.forecast.forecastday[props.dayIndex].hour[0]
                  .condition.text,
                props.weatherData.forecast.forecastday[props.dayIndex].hour[0]
                  .temp_f
              )}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(image)}
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.title}> Weather Report</Text>
          <Text style={styles.header}>No Location Found</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    width: "100%",
    color: "#FFFFFF",
    textShadowColor: "#000",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    color: "#FFFFFF",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  report: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    color: "#FFFFFF",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  card: {
    backgroundColor: "transparent",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#444444",
    height: "40%",
    width: "70%",
    paddingBottom: "5%",
    borderRadius: 10,
    position: "absolute",
    top: "40%",
  },
  weatherImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: 20,
  },
  background: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: "100%",
    alignItems: "center",
  },
});
