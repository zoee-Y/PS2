import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
//import { firebase } from '../../firebase/config';

//const db = firebase.firestore();

const OpDeliveryRequest = ({ navigation }) => {
    const [value, onChangeText] = useState(undefined)

    return (
        <ScrollView>
            <View style={styles.inputView}>
                <Text>Operator: </Text><TextInput style= {{width:250}} defaultValue="Company A" value={value} onChangeText={text => onChangeText(text)}></TextInput>
            </View>
            <View>
                <View style={styles.inputView}>
                    <Text>Blk: </Text><TextInput style= {{width:250}} defaultValue="513" value={value} onChangeText={text => onChangeText(text)}></TextInput>
                </View>
            </View>
        </ScrollView>
    )
    
}


const styles = StyleSheet.create({
    inputView: {
        padding:3,
        flexDirection:"row",
        alignSelf:"center",
        borderBottomColor:"#AE3131",
        borderBottomWidth:1
    }
  });

export default OpDeliveryRequest;