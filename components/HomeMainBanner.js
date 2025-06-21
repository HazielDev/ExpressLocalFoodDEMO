import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ImageBanner from '../assets/burgerpromo.png';

export default function HomeMainBanner({img}){
    
    return(
        <View style={st.main}>
            <Image style={st.img} source={img} />
        </View>
    );
}

const st = StyleSheet.create({
    main:{
        marginTop: -8,
        height: 200,
        width: '100%',
        backgroundColor: 'black'
    },
    text:{
        color: '#fff'
    },
    img:{
        height: 200,
        width: '100%'
    }
});