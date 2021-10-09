import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';

function App() {
  return (
    <View style={styles.container1}>
      <Text style={styles.paragraphtitle}>
        Cargo Collection Confirmation
      </Text>

      <ScrollView style={styles.scrollView}>

      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Operator: 
       </Text>
        <Text style={styles.paragraph}>
         Company A 
        </Text>
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Blk: 
        </Text>
        <Text style={styles.paragraph}>
         519
        </Text>

        <Text style={styles.paragraphheading}>
          Unit Number: 
        </Text>
        <Text style={styles.paragraph}>
         #01-101
        </Text>
      </View>
      
      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Order Number: 
       </Text>
        <Text style={styles.paragraph}>
         123456789
        </Text>
      </View>
      
      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Destination: 
       </Text>
        <Text style={styles.paragraph}>
         Pasir Panjang Terminal
        </Text>
      </View>

      <Text style={styles.paragraph}>
      </Text>

      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Driver: 
       </Text>
        <Text style={styles.paragraph}>
         Michael Jackson
        </Text>
      </View>

      <Text style={styles.paragraphheading}>
        Goods Details:
      </Text>


      

      <View>
      <Grid>
        <Col size={15}>
        
          <Row style={styles.cell}>
            <Text>Quantity</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>50</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>50</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>50</Text>
          </Row>
        </Col>
        <Col size={25}>
        <Row style={styles.cell}>
            <Text>Item Description</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Cartons of 1L Coke</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Cartons of 1L Root Beer</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Cartons of 1L Green Tea</Text>
          </Row>
        </Col>
        <Col size={20}>
        <Row style={styles.cell}>
            <Text>Weight(kg)</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100</Text>
          </Row>
        </Col>
        <Col size={16}>
        <Row style={styles.cell}>
            <Text>Size(m² )</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>2</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>2</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>2</Text>
          </Row>
        </Col>
      </Grid>
    </View>
      

    

      <Text style={styles.paragraphheading}>
        Additional information:
      </Text>
      <View style={styles.container2}>
      <Text style={styles.body}>
         (N.A.)
      </Text>
      </View>

      <Text style={styles.paragraph}>
      </Text>

      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Received by: 
       </Text>
        <Text style={styles.paragraph}>
         Michael Jackson
        </Text>
      </View>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Signature: 
       </Text>
        <View style={styles.container3}>
      </View>
      </View>
      

      <Text style={styles.paragraph}>
      </Text>

      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Confirmed by: 
        </Text>
        <Text style={styles.paragraph}>
         Tan
        </Text>
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Date: 
        </Text>
        <Text style={styles.paragraph}>
         10 October 2021
        </Text>
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={styles.paragraphheading}>
          Signature: 
        </Text>
        <View style={styles.container3}>
        </View>
      </View>
  

      <Text style={styles.paragraph}>
      </Text>

      <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.cancelbutton}>
        <Text style={styles.cancelbuttonText}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.confirmbutton}>
        <Text style={styles.confirmbuttonText}>Confirm</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 7,
  },
  container2: {
    //flex: 1,
    width: 290,
    marginLeft: 6,
    justifyContent: 'top',
    paddingBottom: 100,
    backgroundColor: '#f1f1f1',
    padding: 3,
    borderRadius:5,
  },
  container3: {
    flex: 0.92,
    justifyContent: 'top',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f1f1f1',
    padding: 35,
    borderRadius:5,
  },
  
  cell: {
    borderWidth: 0.8,
    borderColor: 'darkgrey',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'left'
  },

  paragraphtitle: {
    margin: 10,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  paragraphheading: {
    margin: 4,
    marginTop: 3,
    marginBottom: 3,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
  },
  paragraph: {
    margin: 4,
    marginTop: 3,
    marginBottom: 3,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    justifyContent:'left',
  },
  cancelbutton: {
    borderWidth:1,
    borderColor:'darkgrey',
    //alignItems:'left',
    //justifyContent:'left',
    padding: 7,
    backgroundColor:'white',
    borderRadius:5,
    marginBottom: 8,
    marginLeft: 135,
  },
  confirmbutton: {
    //borderWidth:1,
    //borderColor:'grey',
    //alignItems:'left',
    //justifyContent:'left',
    padding: 7,
    backgroundColor:'#131D42',
    borderRadius:5,
    marginBottom: 8,
    marginHorizontal: 15,
  },

  cancelbuttonText: {
    fontSize: 16,
    color: 'darkgrey',
  }, 
  confirmbuttonText: {
    fontSize: 16,
    color: '#f1f1f1',
  }, 

});
