import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
        <Text style={styles.text}>Home Screen</Text>
        <Button
          title="Go to operator deliveries screen"
          onPress={() => {
            navigation.navigate('OpDel');
          }}
        />
    </View>
    
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default HomeScreen;