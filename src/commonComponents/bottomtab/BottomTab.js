import React from "react";
import { StyleSheet, Image, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';
import Item1 from "../../assets/Item1.png";
import Item2 from "../../assets/Item2.png";
import Item3 from "../../assets/Item3.png";
import Item4 from "../../assets/Item4.png";
export default function BottomTab(params) {
    return (
        <>
        <View style={{margin:"0%",display:"flex"}}>


            <Image
            style={{marginLeft: "1%", marginTop: "1%",height:50}}


                source={Item1}
            />

            <Image
 style={{  position: "absolute", left: "25%", marginTop: "1%",height:50}}
                source={Item2}
            />


            <Image
 style={{ position: "absolute",right: "25%", marginTop: "1%",height:50}}
                source={Item3}
            />


            <Image
 style={{ position: "absolute", right: "1%", marginTop: "1%",height:50}}
                source={Item4}
            />




        </View>
        <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 8,
                            marginTop: "0%"
                        }}
                    />     
</>
    )
}


