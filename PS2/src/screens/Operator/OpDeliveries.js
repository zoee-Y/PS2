import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { firebase } from '../../firebase/config';

const db = firebase.firestore();

const OpDeliveries = ({ navigation }) => {
    /*
    const [blkNo, setBlkNo] = useState(0);
    const [unitNo, setUnitNo] = useState(0);
    fSetStates(blkNo, setBlkNo, unitNo, setUnitNo);
    */

    return (
        <View>
            <View>
            <ScrollView>
                <Text style={styles.delText}>Deliveries</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={{flexDirection:"column", marginLeft: "5%"}}>
                        <Text>Blk 519 Level 1</Text>
                        <Text>Unit 01-101</Text>
                    </View>
                    <View style={{flexDirection:"column", marginLeft:"50%", textAlign:"right"}}>
                        <Text style={{color:"#AE3131"}}>Incoming</Text>
                        <Text style={{color:"#2B459F"}}>Outgoing</Text>
                    </View>
                </View>

                <View style={styles.containerIn}>
                    <TouchableOpacity style={styles.containers} onPress={() => {
                        //navigation.navigate("") //navigate to filled form, somehow pass text content to form
                    }}>
                        <View style={{flexDirection:"row", alignSelf:"center"}}>
                            <View style={{flexDirection:"column", width: "165px"}}>
                                <Text>ID: 29847</Text>
                                <Text>Milk powder</Text>
                                <View style={{flexDirection:"row"}}>
                                    <Text>30m</Text>
                                    <Text style={{fontSize: 10, lineHeight: 10}}>3</Text>
                                </View>
                                <Text>Blk 513 #01-224</Text>
                            </View>
                            <View style={{flexDirection:"column", textAlign: "right", width: "165px"}}>
                                <Text>Date: 9/10/2021</Text>
                                <Text>Time: 4.30pm</Text>
                                <Text>Driver: Tan (273545X)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>



                <View style={styles.containerOut}>
                    <TouchableOpacity style={styles.containers} onPress={() => {
                        //navigation.navigate("") //navigate to filled form, somehow pass text content to form
                    }}>
                        <View style={{flexDirection: "row", alignSelf:"center"}}>
                            <View style={{flexDirection: "column", width: "165px"}}>
                                <Text>ID: 29847</Text>
                                <Text>Car parts</Text>
                                <Text>150 parts</Text>
                                <Text>Blk 513 #01-224</Text>
                            </View>
                            <View style={{flexDirection: "column", textAlign: "right", width: "165px"}}>
                                <Text>Date: 9/10/2021</Text>
                                <Text>Time: 4.00pm</Text>
                                <Text>Driver: Michael (YN3475K)</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            
                            <View>
                                
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>



                <View style={styles.containerDIn}>
                    <TouchableOpacity style={styles.containers} onPress={() => {
                            //navigation.navigate("") //navigate to filled form, somehow pass text content to form
                    }}>
                        <View style={{flexDirection: "row", alignSelf:"center"}}>
                            <View style={{flexDirection: "column", width: "165px"}}>
                                <Text>ID: 32857</Text>
                                <Text>Chili sauce</Text>
                                <Text>120 bottles</Text>
                                <Text>Blk 513 #01-224</Text>
                            </View>
                            <View style={{flexDirection: "column",textAlign: "right", width: "165px"}}>
                                <Text>Date: 8/10/2021</Text>
                                <Text>Time: 1.30pm</Text>  
                                <Text>Driver: Tan (273545X)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.containerDOut}>
                    <TouchableOpacity style={styles.containers} onPress={() => {
                        //navigation.navigate("") //navigate to filled form, somehow pass text content to form
                    }}>
                    <View style={{flexDirection: "row", alignSelf:"center"}}>
                        <View style={{flexDirection: "column", width: "165px"}}>
                            <Text>ID: 29847</Text>
                            <Text>Electronic components</Text>
                            <Text>200 pc</Text>
                            <Text>Blk 513 #01-224</Text>
                        </View>
                        <View style={{flexDirection: "column", textAlign: "right", width: "165px"}}>
                            <Text>Date: 8/10/2021</Text>
                            <Text>Time: 2pm</Text>
                            <Text>Driver: Josh (YN2394Q)</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
            <View>
                <View style={{backgroundColor: "white", padding: "10px"}}>
                    <View style={{backgroundColor: "#5376F2", borderRadius: "3px", padding:"10px", flexWrap:"wrap",}}>
                        <TouchableOpacity style={{textAlign: "center"}} onPress={() => {
                            navigation.navigate("OpDelRequest"); //navigate to filled form, somehow pass text content to form
                        }}>
                            <Text>Add new request</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    delText: {
        textAlign: 'center',
        fontWeight: "bold"
    },
    containers: {
        paddingTop: "5px",
        paddingBottom: "5px",
        margin: "5px",
    },

    containerIn: {
        backgroundColor: "#AE3131",
        borderRadius: "10px",
        alignSelf: "center",
        margin: "5px",
        width: "350px",
    },
    containerOut: {
        backgroundColor: "#2B459F",
        borderRadius: "10px",
        alignSelf: "center",
        margin: "5px",
        width: "350px",
    },

    containerDIn: {
        backgroundColor: "#C77F7F",
        borderRadius: "10px",
        alignSelf: "center",
        margin: "5px",
        width: "350px",
    },
    containerDOut: {
        backgroundColor: "#7585BF",
        borderRadius: "10px",
        alignSelf: "center",
        margin: "5px",
        width: "350px",
    }
  });

/*
//functions here
function getOperators() {    
    const opCollection = db.collection('Operator');
    return opCollection.doc('01-101').get().then(result => {
        return result.data();
    });

}

//get data from operators table
async function fSetStates(blkNo, setBlkNo, unitNo, setUnitNo) {
    const res = await getOperators();
    var resBlkNo = res.blkNo;
    var resUnitNo = res.unitNo;
    //if put in async, it does the func twice, takes time for blk no to appear
    //if i dont put in async then it will run this first before the function is done
    if (blkNo != resBlkNo) {
        setBlkNo(resBlkNo);
    }
    if (unitNo != resUnitNo) {
        setUnitNo(resUnitNo);
    }
}
*/

export default OpDeliveries;