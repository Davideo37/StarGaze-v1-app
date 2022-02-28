import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';

import LocationSearch from '../components/LocationSearch';
import { Text, View } from '../components/Themed';
const image = "../assets/images/background.jpg";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(image)}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.title}>STARGAZE</Text>
        <Text style={styles.headerText}>Enter a location or use your GPS!</Text>
        <View style={styles.search}>
          <LocationSearch />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Weekly");
            }}
          >
            <Text style={styles.buttonText}>Tap Here to see the forecast</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Or use the tabs on the bottom</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    width: "100%",
    color: "#FFFFFF",
    textShadowColor: "#000",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    marginBottom: "20%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  background: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: "100%",
    alignItems: "center",
  },
  search: {
    width: "75%",
    backgroundColor: "transparent"
  },
  buttonView: {
    height: 50,
    width: "75%",
    position: "absolute",
    bottom: "10%",
  },
  button: {
    width: "100%",
    height: "100%",
    color: "#000",
    alignSelf: "center",
    backgroundColor: "#0e2654",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    marginBottom: "10%",
  },
});
