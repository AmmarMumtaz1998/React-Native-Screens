import React from "react";
import { View, Text,Image,Button,SafeAreaView, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { styles } from './LoginStyle'

import ImgLogo from "../../assets/logowhite1.png"
import ButtonComponent from "../../commonComponents/button/Button";
export default function Login(params) {

    const [text, onChangeText] = React.useState("Email");
    const [number, onChangeNumber] = React.useState(null);

    return(
<View style={styles.container}>
    <View style={styles.container1}>
    <Image
         style={styles.logo}
        source={ImgLogo}
      />
 
    </View>
    <View style={styles.container2}>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="email-address"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        placeholderTextColor="white"
        
      />
      <Text style={styles.text}>Not Register yet?<TouchableOpacity  onPress={() => {/* do this */}}><Text>Sign up</Text></TouchableOpacity> </Text>
    </SafeAreaView>
    <ButtonComponent backgroundColor="#FF3366"  text="Login" marginTop="65%"/>

</View>



   
    



   </View>
    )
}