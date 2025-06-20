import { User } from "lucide-react-native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function CardComment({item}){


    return(
        <View style={st.main}>
            <View style={st.topComment}>
                <User size={20} color='#fff' />
                <Text style={st.text}>{item.nombre}</Text>
            </View>
            <Text style={st.text}>{item.text}</Text>
        </View>
    );
}

const st = StyleSheet.create({
    main:{
        flexDirection: 'column',
        width: '95%',
        height: 'auto',
        gap: 16,
        marginVertical: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderColor: '#333'
    },
    topComment:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    img:{
        height: 30, 
        width: 30,
        backgroundColor: '#222'
    },
    text:{
        color: '#fff', fontFamily: 'hey'
    }
});