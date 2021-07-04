import React from "react";
import { View, Text, Image, Button, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from './SignUpForm1Style'

import ImgLogo from "../../assets/logowhite1.png"
import ImgBackGround from "../../assets/building.png"
import ButtonComponent from "../../commonComponents/button/Button";
export default function SignUpForm1(params) {
    // const [text, onChangeText] = React.useState("Email");
    // const [number, onChangeNumber] = React.useState(null);

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const [sometext, onChangeSomeText] = React.useState(null);
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
                    <Text style={{color:"black",marginTop:12,fontSize:24,lineHeight:37}}>Abrir Cuenta</Text>
                    </View>
                   
                    <View style={styles.container4} >
                   
               
<Text style={{marginLeft:"7%"}}>Email <Text style={{color:"red"}}>*</Text></Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="email-address"
        placeholderTextColor="grey"
        placeholder="Nombre(s)"
        
      />
      <Text style={{marginLeft:"7%"}}>Contraseña <Text style={{color:"red"}}>*</Text> </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Apellido Paterno"
        placeholderTextColor="grey"
        
      />
       <Text style={{marginLeft:"7%"}}>Repetir contraseña<Text style={{color:"red"}}>*</Text> </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSomeText}
        value={sometext}
        placeholder="Apellido Paterno"
        placeholderTextColor="grey"
        
      />
      
      <ButtonComponent backgroundColor="#227BFF"  text="Abrir Cuenta" marginTop="10%" />
    </View>
                  

                    




                    



                </View>





            </ImageBackground>


        </View>
    )
}