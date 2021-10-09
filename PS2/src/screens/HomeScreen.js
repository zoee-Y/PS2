import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

const HomeScreen = () => {

  return (
    <View>
        <Text style={styles.text}>Home Screen</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default HomeScreen;