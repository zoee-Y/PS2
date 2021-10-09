import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import screens here
import HomeScreen from "./src/screens/HomeScreen";
import OpDeliveries from "./src/screens/Operator/OpDeliveries";
import CargoDeliveryRequest from './src/screens/Operator/CargoDeliveryRequest'


const navigator = createStackNavigator({
  //add screens here
  Home: HomeScreen,
}, {
   initialRouteName: 'Home',
   defaultNavigationOptions: {
    title: 'goSeeQ!'
   }

});

export default createAppContainer(navigator);