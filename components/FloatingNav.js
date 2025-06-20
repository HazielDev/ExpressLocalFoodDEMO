import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Logo from '../assets/express.png';

export default function FloatingNav(){
    return(
        <View style={st.main}>
            <Image source={Logo} style={st.logo}  />
        </View>
    );  
}

const st = StyleSheet.create({
    main:{
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    logo:{
        marginTop: -32,
        height: 180,
        width: 180,
        resizeMode: 'contain',
    }
});