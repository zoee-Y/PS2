import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import screens here
import HomeScreen from "./src/screens/HomeScreen";
import OpDeliveries from "./src/screens/Operator/OpDeliveries";
import OpDeliveryRequest from './src/screens/Operator/CargoDeliveryRequest';


const navigator = createStackNavigator({
  //add screens here
  Home: HomeScreen,
  OpDel: OpDeliveries,
  OpDelRequest: OpDeliveryRequest,
}, {
   initialRouteName: 'Home',
   defaultNavigationOptions: {
    title: 'KD Internal Delivery Network App',
   }
});

export default createAppContainer(navigator);