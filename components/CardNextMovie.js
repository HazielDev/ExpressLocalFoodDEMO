import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default function CardNextMovie({movie, navigation, label}){
    return(
        <TouchableOpacity style={[st.main, label && st.paddinBig]} onPress={() => navigation.navigate('Detail', {info:movie})}>
            <Image style={st.img} source={{uri: movie.image}} borderTopLeftRadius={3} borderTopRightRadius={3} resizeMode="contain"/>
            <Text style={st.texto}>{movie.title}</Text>
            <Text style={st.precio}>$ {movie.price}</Text>
            <Text style={st.subtexto}>{movie.category}</Text>
            {label ? <Text style={st.labelEstreno} >{label}</Text> : null}
        </TouchableOpacity>
    );
}

const st = StyleSheet.create({
    main: {
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: 350,
        width: 150,
        backgroundColor: '#ffffff',
        padding: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Sombra para Android
        elevation: 6,
        paddingBottom: 12
        
    },
    texto: {
        marginTop: 8,
        color: '#000000',
        fontFamily: 'hey',
        fontSize: 12
    },
    precio: {
        color: '#000000',
        fontFamily: 'heyo',
        fontSize: 16
    },
    subtexto:{
        marginTop: 8,
        backgroundColor: 'black',
        color: '#fff',
        fontFamily: 'hey',
        paddingVertical : 5,
        paddingLeft: 8,
        maxWidth: '80%',
        fontSize: 10,
        borderRadius: 3  
    },
    img:{
        height: 160,
        width: '100%',
    },
    labelEstreno: {
        position: 'absolute',
        bottom: 0,
        width: '106.4%',
        backgroundColor: '#ca0000',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'hey',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        fontSize: 12,
        paddingVertical: 6
    },
    paddinBig:{
        paddingBottom: 32,
    }
});