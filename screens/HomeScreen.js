import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView, FlatList, TextInput, TouchableOpacity } from "react-native";
import * as Font from 'expo-font';
import { Montserrat_500Medium, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { StatusBar } from "expo-status-bar";
import HomeMainBanner from "../components/HomeMainBanner";
import { MapPinHouse, Search, Tag, TrendingUp } from "lucide-react-native";
import CardCategory from "../components/CardCategory";
import HomeSearcher from "../components/HomeSearcher";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 
import RestaurantCard from "../components/restaurant/RestaurantCard";
import * as Location from 'expo-location';
import axios from "axios";

const loadFonts = async () => {
    await Font.loadAsync({
        hey: Montserrat_500Medium,
        heyo: Montserrat_700Bold
    });
}

export default function HomeScreen({navigation}){

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [cats, setCats] = useState([]);
    const [rest, setRest] = useState([]);
    const [actualLocation, setActualLocation] = useState(null);
    const [dirActual, setDirActual] = useState("");
    const API_OPEN_CAGE = 'e9cd7fccd0e74cba8515c03524c0929d';

    useEffect(() => {
        loadFonts()
          .then(() => {
            setFontsLoaded(true);
          })
          .catch(error => {
            console.error('Error al cargar las fuentes:', error);
          });

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permiso de ubicación denegado');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
            setActualLocation(location)
            
        })();
      }, []);
    
    useEffect(() => {
        if (fontsLoaded) {

            const fetchCategorias = async () => {
                try {
                    const q = collection(db, 'categoria');
                    const data = await getDocs(q);
                    const realData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                    console.log(realData);
                    setCats(realData);
                } catch (error) {
                    console.error("Error al cargar categorías:", error);
                }
            }

            const fetchRestaurantes = async () => {
                try {
                    const q = collection(db, 'restaurante');
                    const data = await getDocs(q);
                    const realData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                    console.log(realData);
                    setRest(realData);
                } catch (error) {
                    console.error("Error al cargar restaurantes:", error);
                }
            };

            fetchCategorias();
            fetchRestaurantes();
              
        }
    }, [fontsLoaded]);

    useEffect(() => {
        if(actualLocation != null){
            const lat = actualLocation.coords.latitude;
            const lon = actualLocation.coords.longitude;

            axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lon}&key=${API_OPEN_CAGE}`)
            .then(response => {
                const jsonData = response.data;
                const components = jsonData.results[0].components;
                const direccion = components.road;
                const numeroCasa = components.house_number;
                console.log(`Direccion: ${direccion} , ${numeroCasa}`);
                setDirActual(`${direccion}, ${numeroCasa}`)

              })
              .catch(error => {
                console.error('Error al obtener los datos:', error);
              });
        }

    }, [actualLocation])
    
    const renderItem = ({ item }) => {
        return <CardCategory data={item} />;
    };

    return(
        <SafeAreaView style={st.body}>
            <StatusBar backgroundColor="#ffffff"></StatusBar>
            <ScrollView style={st.container} contentContainerStyle={st.scrollContent}>
                <View style={st.topDir}>
                    <MapPinHouse size={19} strokeWidth={1.3} color={'#B1CC40'} />
                    <Text style={st.textUbi}>Enviar a: {dirActual}</Text>
                </View>
                <HomeMainBanner />
                    <HomeSearcher />
                <FlatList
                    data={cats} 
                    renderItem={renderItem} 
                    keyExtractor={(item, index) => index.toString()} 
                    contentContainerStyle={st.scrollHor} 
                    horizontal
                    showsVerticalScrollIndicator={false}
                    style={{paddingBottom: 32}}
                />
                <View  style={{        
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    width: '90%'
                }}> 
                    <Tag color={'#B1CC40'} size={14} />
                    <Text style={st.subTitle}>Nuestros Restaurantes favoritos</Text>
                </View>
                {rest.map((restau) =>(
                    <RestaurantCard key={restau.id} data={restau} />
                ))}
                <View style={{marginTop: 40}} />
            </ScrollView>
        </SafeAreaView>
    )
}

const st = StyleSheet.create({
    topDir:{
        marginTop: 16,
        marginBottom: 23,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingInline: 8,
        gap: 8,
        width: '95%'
    },  
    textUbi:{
        fontSize: 12,
        fontFamily: 'hey',
        color: '#fff',
        letterSpacing: 0.2,
    },
    scrollContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    scrollHor:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingInline: 8,
        gap: 4
    },
    mainTitle:{
        fontSize: 90,
        color: '#fff',
        fontFamily: 'hey'
    },
    body:{
        position: 'relative',
        flex: 1,
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#1c1c1c',
    },
    basicText:{
        color: '#fff',
        fontFamily: 'hey'
    },
    subTitle:{
        width: '90%',
        color: '#fff',
        fontFamily: 'heyo',
        marginVertical: 12,
        marginTop: 16
    },
})