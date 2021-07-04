import React from "react";
import { View, Text, Image, Button, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from './LoginFormStyle'
import ImgLogo from "../../assets/logowhite1.png"
import ImgBackGround from "../../assets/building.png"
import ButtonComponent from "../../commonComponents/button/Button";
export default function LoginForm(params) {
    // const [text, onChangeText] = React.useState("Email");
    // const [number, onChangeNumber] = React.useState(null);

    const [text, onChangeText] = React.useState("Email");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.container}>

            <ImageBackground source={ImgBackGround} style={styles.image}>



                <View style={styles.container1}>
                    <Image
                        style={styles.logo}
                        source={ImgLogo}
                    />

                </View>
                <View style={styles.container2}>
                    <View style={styles.container3}>
                    <Text style={{color:"black",marginTop:12,fontSize:24,lineHeight:37}}>Iniciar sesión</Text>
                    </View>
                   
                    <View style={styles.container4} >
                   
               
<Text style={{marginLeft:12}}>Email <Text style={{color:"red"}}>*</Text></Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="email-address"
        placeholderTextColor="white"
      />
      <Text style={{marginLeft:12}}>Contraseña <Text style={{color:"red"}}>*</Text> </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        placeholderTextColor="grey"
        
      />
      
      <TouchableOpacity  onPress={() => {/* do this */}}><Text style={styles.text}>¿Olvidaste tu contraseña? </Text></TouchableOpacity> 
      
      <ButtonComponent backgroundColor="#227BFF"  text="Iniciar Sesión" marginTop="25%" />
    </View>
                  

                    




                    



                </View>





            </ImageBackground>


        </View>
    )
}