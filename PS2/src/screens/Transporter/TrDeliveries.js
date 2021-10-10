import React from 'react';
import { Node } from 'react';
import openMap from 'react-native-open-maps';
import { createOpenLink } from 'react-native-open-maps';
import { createMapLink } from 'react-native-open-maps';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { firebase } from '../../firebase/config'
import { withOrientation } from 'react-navigation';
import { color } from 'react-native-elements/dist/helpers';


const TrRequest = ({ navigation }) => {
    return (
        <View>
             <TouchableOpacity style={styles.mapButton} onPress={() => navigation.navigate("OpRoute")} >
            <Text style={styles.mapButtonText}>🏞 Map</Text>
        </TouchableOpacity>
       
        
        <View style={styles.containerIn}>
            <TouchableOpacity style={styles.containers} onPress={() => {
                navigation.navigate("DCon") //navigate to filled form, somehow pass text content to form
            }}>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <View style={{ flexDirection: "column", width: 165, color:'white' }}>
                        <Text>ID: 29847</Text>
                        <Text>Blk 513 #02-110 DEFG Warehouse</Text>


                        <Text>Blk 515 #01-120 Tenant: ABCD</Text>
                    </View>
                    <View style={{ flexDirection: "column", textAlign: "left", width: 165, color: 'white' }}>
                        <Text>Description</Text>

                        <Text>Weight</Text>

                        <Text>Volume</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        </View>

    );
};




/*openMap(yosemite)*/
const styles = StyleSheet.create({
    containers: {
        paddingTop: 5,
        paddingBottom: 5,
        margin: 5,
    },

    containerIn: {
        backgroundColor: "#AE3131",
        borderRadius: 10,
        alignSelf: "center",
        margin: 5,
        width: 350,
        color:'white'
    },
    info: {
        color: 'white'
    },
    requests: {
        backgroundColor: '#ae3131',
        color: 'white',
        borderRadius: 20,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#e4e4e4'
    },
    header: {
        padding: 30,
        width: '100%',
        flex: 1,
        paddingBottom: 0,
        backgroundColor: '#151515'
    },
    headerTitle: {
        fontSize: 38,
        fontWeight: '400',
        color: 'white'
    },
    mapTitle: {
        fontSize: 20,
        color: '#2a2830',
        marginBottom: 10,
        marginTop: 13
    },

    mapButton: {
        borderRadius: 20,
        backgroundColor: "#AE3131",
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#e4e4e4'
    },
    mapButtonText: {
        fontWeight: '500',
        color: 'white'
    },
    emojis: {
        fontSize: 35,
        marginBottom: 10,
        alignSelf: 'flex-end'
    },
    coordinates: {
        fontSize: 14,
        fontWeight: '500',
        color: '#bdc3c7'
    },

});

export default TrRequest;
