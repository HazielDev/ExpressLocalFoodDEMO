import React from "react";
import { ScrollView, View, StyleSheet, Text, Image } from "react-native";
import FloatingNav from "../components/FloatingNav";

export default function Test(){
    return(
        <View style={st.container}>
            <ScrollView style={st.scrool}>
                <FloatingNav />
            </ScrollView>
        </View>
    )
}

const st = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrool:{
        position: 'relative',
        flex: 1,
        width: '100%',
        backgroundColor: 'grey'
    }
});