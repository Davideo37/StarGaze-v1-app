export default function checkWeather(weatherCondition, temperature)
{
    let message;
    switch (weatherCondition) {
      case "Clear": {
        if (temperature > 40) {
          message = "Tonight is a great night to Stargaze!";
        } else if (temperature < 20) {
          message =
            "Tonight is clear but pretty cold, you should bundle up if you're planning to go out.";
        } else {
          message =
            "Tonight is clear but a little chilly, you may want a few extra layers for stargazing.";
        }
        break;
      }
        case "Partly cloudy":
            message =
                "It's a bit cloudy out, tonight might not be the best time for stargazing.";
            break;

        default:
            message = "Tonight is not a good night for stargazing.";
            break;
    }
    return message;
}