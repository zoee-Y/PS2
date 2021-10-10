import React from 'react';

import {Node} from 'react';
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

const start = { latitude: 1.2706469972135908, longitude: 103.82740679035136 }
const end = 'Kepple Distripark,Singapore,SG'

const DemoContent = ({Node}) => {
     
      const travelType = 'drive';
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Routing System</Text>
        </View>
  
          <Text style={styles.mapTitle}>Google Maps</Text>
          <View style={styles.mapButtonCard}>
            <TouchableOpacity
              style={styles.mapButton}
              onPress={createOpenLink({ latitude: 1.2707227492270097, longitude: 103.82742072592937 , provider: 'google', zoom: 30 })}>
              <Text style={styles.mapButtonText}>🏞 Display Keppel District Park </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mapButton}
              onPress={createOpenLink({ travelType, end, provider: 'google' })}>
              <Text style={styles.mapButtonText}>🚙 Directions (Your Location - Kepple District Park)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  };
  
  const Route = ({Node}) => {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <DemoContent/>
        </ScrollView>
      </SafeAreaView>
    );
  };


/*openMap(yosemite)*/
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7'
    },
    header: {
      padding: 30,
      width: '100%',
      flex: 1,
      paddingBottom: 0,
      backgroundColor: "#AE3131"
    },
    headerTitle: {
      fontSize: 38,
      fontWeight: '400',
      color: 'white'
    },
    mapTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2a2830',
        marginBottom: 10,
        marginTop: 13
      },

    mapButton: {
      borderRadius: 20,
      backgroundColor: 'white',
      padding: 15,
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 10,
      borderBottomWidth: 3,
      borderBottomColor: '#e4e4e4'
    },
    mapButtonText: {
      fontWeight: '500'
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

export default Route;
