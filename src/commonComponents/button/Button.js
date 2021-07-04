import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,TouchableOpacity } from 'react-native';
// import { styles } from "../button/ButtonStyle";
export default function ButtonComponent(props) {
    return(

<TouchableOpacity onPress={() => {/* do this */}}>
  <View style={{
      backgroundColor: props.backgroundColor,
      alignItems: 'center', 
      justifyContent: "center",
      borderRadius: 25,
      height:60,
      marginLeft:32,
      marginRight:32,
      marginTop:props.marginTop,
      marginBottom:props.marginBottom,
      
      
      
      
    }}
  >
    <Text style={{ color: 'white',fontSize:18 }}>{props.text}</Text>
  </View>
</TouchableOpacity>


//         <View style={styles.container}>
//        <Button title="Login" color ="#FF3366"/>
// </View>
    )
}