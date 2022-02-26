export default function checkWeather(weatherCondition, temperature)
{
    let message;
    switch (weatherCondition) {
      case "Clear": {
        if (temperature > 40) {
          message = "This night is a great night to Stargaze!";
        } else if (temperature < 20) {
          message =
            "This night is clear but pretty cold, you should bundle up if you're planning to go out.";
        } else {
          message =
            "This night is clear but a little chilly, you may want a few extra layers for stargazing.";
        }
        break;
      }
        case "Partly cloudy":
            message =
                "This night is a bit cloudy out, it might not be the best time for stargazing.";
            break;

        default:
            message = "This night is not a good night for stargazing.";
            break;
    }
    return message;
}