
import React from "react";
import { View, Text, Image, Button, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from './DashboardStyle'
import MenuImg from "../../assets/menu.png";
import HomeImg from "../../assets/Mask.png";
import Building2 from "../../assets/building2.png";

import BottomTab from "../../commonComponents/bottomtab/BottomTab";


export default function Dashboard(params) {
    return (
        <View style={styles.container}>





            <View style={styles.container1}>

                <Image
                    style={styles.menuImg}
                    source={MenuImg}
                />


                <Text style={{ fontFamily: "roboto", fontSize: 20, fontWeight: "500", marginLeft: "40%",position:"absolute",top:"50%" }}>Invertir</Text>
                <Text style={{ fontFamily: "roboto", fontSize: 18, fontWeight: "500", marginLeft: "6%",marginTop:"2%" }}>Oportunidades de Inversión</Text>
            </View>
            <View style={styles.container2}>
                <View>

                    <Text style={{ marginLeft: "5%", fontSize: 14, fontWeight: "bold", lineHeight: 21, marginTop: "2%" }}>Desarrollo Alfa</Text>
                    <Text style={{ fontSize: 10, lineHeight: 10, fontFamily: "overpass", marginLeft: "5%", color: "#959595" }}>Por Desarrollador 1</Text>
                    <Text style={{ position: "absolute", left: "60%", marginTop: "2%" }}>Quedan 39 días</Text>
                </View>
                <View>
                    <View style={{ backgroundColor: "#227BFF", height: "9%", display: "flex", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 10, lineHeight: 15, fontFamily: "overpass" }}>Deuda</Text>
                    </View>


                    <View>
                        <Image
                            style={{ width: "100%", height: 120 }}
                            source={HomeImg}
                        />
                    </View>

                    <View style={{ backgroundColor: "#E5E5E5" }}>
                        <View style={{ backgroundColor: "#227BFF", width: "40%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 10, lineHeight: 15 }}>40%</Text>

                        </View>
                    </View>



                    <View>
                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", marginLeft: "1%", marginTop: "1%" }}>$1.5MM recaudado</Text>



                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", position: "absolute", left: "40%", marginTop: "1%" }}>Min $4.5MM</Text>


                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", position: "absolute", right: "1%", marginTop: "1%" }}>Max $4.5MM</Text>

                    </View>

                    <View
                        style={{
                            borderBottomColor: '#BBBBBB',
                            borderBottomWidth: 1,
                            marginTop: "2%"
                        }}
                    />
                    <View>
                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", marginLeft: "1%", marginTop: "1%" }}>Tasa anual fija</Text>



                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", position: "absolute", left: "40%", marginTop: "1%" }}>Mín de inversión</Text>


                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", position: "absolute", right: "8%", marginTop: "1%" }}>Plazo</Text>







                    </View>
                    <View>
                        <Text style={{ fontSize: 12, fontWeight: "bold", fontFamily: "overpass", lineHeight: 20, color: "#0C1327", marginLeft: "3%", }}>12.32%</Text>



                        <Text style={{ fontSize: 12, fontWeight: "bold", fontFamily: "overpass", lineHeight: 18, color: "#0C1327", position: "absolute", left: "40%", }}>$54,000 MXN</Text>


                        <Text style={{ fontSize: 12, fontWeight: "bold", fontFamily: "overpass", lineHeight: 18, color: "#0C1327", position: "absolute", right: "2%", }}>12 meses</Text>







                    </View>








                </View>














            </View>


            <View style={styles.container3}>



                <View>

                    <Text style={{ marginLeft: "5%", fontSize: 14, fontWeight: "bold", lineHeight: 21, marginTop: "2%" }}>Desarrollo Alfa</Text>
                    <Text style={{ fontSize: 10, lineHeight: 10, fontFamily: "overpass", marginLeft: "5%", color: "#959595" }}>Por Desarrollador 1</Text>
                    <Text style={{ position: "absolute", left: "60%", marginTop: "2%" }}>Quedan 39 días</Text>
                </View>
                <View>
                    <View style={{ backgroundColor: "#227BFF", height: "9%", display: "flex", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 10, lineHeight: 15, fontFamily: "overpass" }}>Deuda</Text>
                    </View>


                    <View>
                        <Image
                            style={{ width: "100%", height: 120 }}
                            source={Building2}
                        />
                    </View>

                    <View style={{ backgroundColor: "#E5E5E5" }}>
                        <View style={{ backgroundColor: "#227BFF", width: "40%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 10, lineHeight: 15 }}>40%</Text>

                        </View>
                    </View>



                    <View>
                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", marginLeft: "1%", marginTop: "1%" }}>$1.5MM recaudado</Text>



                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", position: "absolute", left: "40%", marginTop: "1%" }}>Min $4.5MM</Text>


                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", position: "absolute", right: "1%", marginTop: "1%" }}>Max $4.5MM</Text>

                    </View>

                    <View
                        style={{
                            borderBottomColor: '#BBBBBB',
                            borderBottomWidth: 1,
                            marginTop: "2%"
                        }}
                    />
                    <View>
                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", marginLeft: "1%", marginTop: "1%" }}>Tasa anual fija</Text>



                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", position: "absolute", left: "40%", marginTop: "1%" }}>Mín de inversión</Text>


                        <Text style={{ fontSize: 10, fontFamily: "overpass", lineHeight: 15, color: "black", position: "absolute", right: "8%", marginTop: "1%" }}>Plazo</Text>







                    </View>
                    <View>
                        <Text style={{ fontSize: 12, fontWeight: "bold", fontFamily: "overpass", lineHeight: 20, color: "#0C1327", marginLeft: "3%", }}>12.32%</Text>



                        <Text style={{ fontSize: 12, fontWeight: "bold", fontFamily: "overpass", lineHeight: 18, color: "#0C1327", position: "absolute", left: "40%", }}>$54,000 MXN</Text>


                        <Text style={{ fontSize: 12, fontWeight: "bold", fontFamily: "overpass", lineHeight: 18, color: "#0C1327", position: "absolute", right: "2%", }}>12 meses</Text>







                    </View>








                </View>






            </View>
            <View
                style={{
                    borderBottomColor: '#BBBBBB',
                    borderBottomWidth: 1,
                    marginTop: "1%"
                }}
            />

           
< BottomTab/>







        </View >
    )
}
