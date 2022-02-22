import { StyleSheet, ImageBackground, Image } from "react-native";
import { Text, View } from "../components/Themed";
import checkWeather from "../hooks/checkWeather";

const image = "../assets/images/background.jpg";

export default function WeatherScreen(props) {
  if (props.weatherData) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(image)}
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.title}>
            {props.weatherData.location.name + ", " + props.weatherData.location.region}
          </Text>
          <Text style={styles.title}>
            {checkWeather(
              props.weatherData.forecast.forecastday[0].hour[0].condition.text,
              props.weatherData.forecast.forecastday[0].hour[0].temp_f
            )}
          </Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Image
            style={styles.weatherImage}
            source={{
              uri:
                "https:" +
                props.weatherData.forecast.forecastday[0].hour[0].condition.icon,
            }}
          />
        </ImageBackground>
      </View>
    );
  } else {
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  weatherImage: {
    width: 75,
    height: 75,
    top: 0,
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
