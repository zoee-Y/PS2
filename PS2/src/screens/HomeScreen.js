import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';


const HomeScreen = ({ navigation }) => {



  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to
      </Text>
      <View>
        <Image 
        style={styles.image}
        source={{ uri:"https://cdn-icons-png.flaticon.com/512/237/237178.png"}}
        />
      </View>

      <Text style={styles.paragraphheading}>
        Keppel Distripark
      </Text>
      <Text style={styles.paragraphheading}>
        Central Delivery System
      </Text>
      
      <TouchableOpacity onPress={() => navigation.navigate("OpLogin")} style={styles.Loginbutton}>
        <Text style={styles.LoginbuttonText}>Operator Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("TrLogin")} style={styles.Loginbutton}>
        <Text style={styles.LoginbuttonText}> Driver Login</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  title: {
    margin: 10,
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'left',
    color: '#131D42',
  },

  image: {
    width: 220,
    borderRadius: 90,
    height: 220,
    marginBottom: 30,
    //justifyContent: 'center',
    //alignItems:'center',
    marginLeft: 40,
    marginTop:10,
  },

  paragraphheading: {
    //margin: 0,
    //marginTop: 0,
    //marginBottom: 17,
    //marginLeft: 5,
    //marginRight: 0,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#131D42',
  },
  
  Loginbutton: {
    borderWidth:1,
    // alignItems:'left',
    // justifyContent:'left',
    padding: 15,
    backgroundColor:'#131D42',
    borderRadius: 5,
    marginTop: 25,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  LoginbuttonText: {
    fontSize: 20,
    color: '#f1f1f1',
    textAlign: 'center'
  }, 
});
export default HomeScreen;