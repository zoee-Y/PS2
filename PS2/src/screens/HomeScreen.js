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
            onPress={() => navigation.navigate("OpDel")}
            title="Go to operator deliveries screen"
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