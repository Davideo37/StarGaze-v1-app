/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {responseJson} from '../hooks/useWeatherAPI';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import WeatherScreen from '../screens/WeatherScreen';

import useWeatherAPI from '../hooks/useWeatherAPI';

const image = "../assets/images/background.jpg";

export default function Navigation(colorScheme) {
  return (
    <NavigationContainer
      theme={colorScheme.colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false}}
      />
      <Stack.Group
        screenOptions={{
          presentation: "card",
        }}
      ></Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "white",
        tabBarBackground: () => (
          <ImageBackground
            source={require(image)}
            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
            }}
            resizeMode="cover"
          />
        ),
      }}
      style={{ opacity: 0.1 }}
    >
      <BottomTab.Screen
        name="Weekly"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: "Weekly",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Report")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Home"
        component={TabTwoScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Report"
        children={() => <WeatherScreen weatherData={responseJson} />}
        options={{
          title: "Report",
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
