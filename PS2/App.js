import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import screens here
import HomeScreen from "./src/screens/HomeScreen";
import OpLogin from "./src/screens/Operator/OpLogin";
import TrLogin from './src/screens/Transporter/TrLogin';
import OpDeliveries from "./src/screens/Operator/OpDeliveries";
import OpDeliveryRequest from "./src/screens/Operator/CargoDeliveryRequest";
import TrDeliveries from "./src/screens/Transporter/TrDeliveries";
import DCon from "./src/screens/Transporter/DeliveryConfirmation";

import CargoDeliveryRequest from './src/screens/Operator/CargoDeliveryRequest';
import Route from "./src/screens/Transporter/Route";

const navigator = createStackNavigator({
  //add screens here
  Home: HomeScreen,
  OpDel: OpDeliveries,
  OpDelRequest: OpDeliveryRequest,
  TrDeliveries: TrDeliveries,
  OpRoute:Route,
  DCon: DCon,
  OpLogin: OpLogin,
  TrLogin: TrLogin,
}, {
   initialRouteName: 'Home',
   defaultNavigationOptions: {
    title: 'KD Internal Delivery Network App',
   }
});

export default createAppContainer(navigator);