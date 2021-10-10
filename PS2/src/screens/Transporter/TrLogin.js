import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';


function Loginpage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login Page
      </Text>
      <View>
        <Image 
        style={styles.image}
        source={{ uri:"https://cdn-icons-png.flaticon.com/512/237/237178.png"}}
        />
      </View>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Driver ID: 
        </Text>
        <View style={styles.container}>
          <TextInput style={styles.input}/>
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Password: 
        </Text>
        <View style={styles.container}>
          <TextInput style={styles.input}/>
        </View>
      
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("TrDeliveries")} style={styles.Loginbutton}>
        <Text style={styles.LoginbuttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Redirecting')}>
        <Text style={styles.FPbuttonText}>Forgot password?</Text>
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
    marginTop: 0,
    marginBottom: 17,
    marginLeft: 5,
    marginRight: 0,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
  },
  input: {
    borderColor: "#131D42",
    backgroundColor:'white',
    flex: 1,
    //width: "100%",
    borderWidth:0.9,
    borderRadius: 5,
    padding: 0,
  },
  Loginbutton: {
    borderWidth:1,
    // alignItems:'left',
    // justifyContent:'left',
    padding: 5,
    backgroundColor:'#131D42',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  LoginbuttonText: {
    fontSize: 20,
    color: '#f1f1f1',
    textAlign: 'center'
  }, 
  FPbuttonText: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center',
    textDecorationLine: 'underline',
  }, 
});
