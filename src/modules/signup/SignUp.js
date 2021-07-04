import React from "react";
import { View, Text,Image,Button,SafeAreaView, StyleSheet, TextInput,TouchableOpacity,ImageBackground } from "react-native";
import { styles } from './SignUpStyle'

import ImgLogo from "../../assets/logowhite1.png"
import ImgBackGround from "../../assets/building.png"
import ButtonComponent from "../../commonComponents/button/Button";
export default function SignUp(params) {

   

    return(
<View style={styles.container}>

<ImageBackground source={ImgBackGround} style={styles.image}>
      
    

    <View style={styles.container1}>
    <Image
         style={styles.logo}
        source={ImgLogo}
      />
 
    </View>
    <View style={styles.container2}>
   
    <Text style={{fontSize:24,color:"white",fontFamily:"Overpass",fontStyle:"normal",fontWeight:"bold",display:"flex",textAlign:"center"}}>CROWDFUNDING 
</Text>
<Text style={{fontSize:24,color:"white",fontFamily:"Overpass",fontStyle:"normal",fontWeight:"bold",display:"flex",textAlign:"center"}}>
INMOBILIARIO</Text>

</View>

<View style={styles.container3}>
  
    <ButtonComponent backgroundColor="#227BFF"  text="Iniciar sesión" marginBottom="2%"/>
    <ButtonComponent backgroundColor="#0C1327"  text="Iniciar sesión"/>

</View>



</ImageBackground>
   
    



   </View>
    )
}