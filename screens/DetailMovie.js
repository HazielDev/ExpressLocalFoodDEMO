import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from "react-native";
import { ChevronLeft, Clapperboard, Dot, Send, Star } from "lucide-react-native";
import CardNextMovie from "../components/CardNextMovie";
import axios from "axios";

export default function DetailMovie({route, navigation}){

    const {info} = route.params;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getProds = () =>{
                axios.get('https://fakestoreapi.com/products')
              .then(response => {
                const jsonData = response.data;
                setMovies(jsonData.slice(0, 10));
              })
              .catch(error => {
                console.error('Error al obtener los datos:', error);
              });
        }

        getProds();

    }, [null]);

    return(
        <View style={st.main}>
            <ScrollView style={st.container} contentContainerStyle={st.scrollContent} >
                <View style={st.banner}>
                    <Image style={st.img} source={{uri: info.imagen}} resizeMode="contain" />
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', top: -35, left: 12, flexDirection: 'row', alignItems: 'center'}}>
                        <ChevronLeft color="#fff" size={30} />
                        <Text style={{color: '#fff', fontFamily: 'hey', fontSize: 18}}>Regresar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={st.title}>{info.nombre}</Text>
                <Text style={st.descr}>Nuestras comidas</Text>
                {/* <Text style={st.descr}>{info.description}</Text>
                <View style={st.contComentarios}>
                    <Text style={st.commentTitle} >Productos relacionados:</Text>
                    <FlatList
                        data={movies} 
                        renderItem={renderItem} 
                        keyExtractor={(item, index) => index.toString()} 
                        contentContainerStyle={st.scrollHor} 
                        horizontal
                        showsVerticalScrollIndicator={false}
                        style={{paddingBottom: 32}}
                    />
                </View> */}
            </ScrollView>
        </View>
    );
}

const st = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ddd'
    },
    banner:{
        marginTop: 74,
        position: 'relative',
        height: 300,
        width: '100%'
    },
    img:{
        flex: 1,
    },
    descr:{
        marginTop: 16,
        fontFamily: 'hey',
        color: 'gray',
        width: '90%'
    },
    text:{
        fontFamily: 'hey',
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        fontSize: 13
    },
    contTitle:{
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    title:{
        marginTop: 36,
        fontSize: 30,
        color: '#fff',
        fontFamily: 'heyo',
        width: '90%'
    },
    contComentarios:{
        marginTop: 32,
        flex: 1,
        minHeight: 400,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f0f0f0'
    },
    commentTitle:{
        marginTop: 32,
        marginBottom: 8,
        color: '#fff',
        fontFamily: 'heyo',
        width: '90%',
        fontSize: 20
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ca0000',
        paddingVertical: 8,
        borderRadius: 3,
        width: '90%'
    },
    warningText: {
        color: '#b5b5b5',
        textAlign: 'center',
        fontFamily: 'hey',
        width: '70%',
    },
    contWarning:{
        marginTop: 26,
        borderWidth: 1,
        borderColor: '#525252',
        alignItems: 'center',
        width: '90%',
        paddingVertical: 16,
        gap: 16,
        borderRadius: 3
    },
    contDonde:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 12,
        height: 'auto',
        width: 'auto',
    },
    contDondess:{
        marginTop: 16,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        gap: 32
    },
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#111',
    },
    scrollContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    scrollHor:{
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingInline: 8,
        gap: 16
    },
});