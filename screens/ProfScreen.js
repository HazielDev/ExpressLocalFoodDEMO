import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LogOut, User } from "lucide-react-native";
import LoginScreen from "./LoginScreen";
import { auth } from "../firebase";

export default function ProfScreen({navigation}){
    
    console.log(auth);
    

    const [hCode, setHCode] = useState("");
    const [nombreStorage, setNombreStorage] = useState("");

    useEffect(() => {

        let tempCode = "";
        const cargarHCode = async () => {
            tempCode = await AsyncStorage.getItem('hCode');

            setHCode(tempCode)
        }

        const cargarNombre = async () => {
            let nombre = await AsyncStorage.getItem('nombre');
            console.log(`Nombre: ${nombre}`);
            setNombreStorage(nombre)
        }

        cargarHCode();
        cargarNombre();

    }, [])
    
    const closeSession = () => {
        auth.signOut()
        .then(() => {
            navigation.replace('HomeTabs', {screen: 'Inicio'});
        })
        .catch(err => {alert(`Error al cerrar sesión: ${err.message}`)})
    }

    if(auth.currentUser == undefined){
        return(
            <LoginScreen navigation={navigation} />
        );
    }

    return(
        <View style={st.main}>
        <View style={st.topProfile}>
            <User size={20} color={'#fff'} />
            <Text style={st.basicText}>{auth.currentUser?.email}</Text>
        </View>
        <View style={st.body}>
            <TouchableOpacity style={st.btn} onPress={closeSession}>
                <LogOut size={20} color={'#fff'} />
                <Text style={st.basicText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

const st = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#111'
    },
    topProfile:{
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingInline: 32,
        gap: 32,
        borderWidth: 1,
        borderColor: '#3c3c3c',
        backgroundColor: '#111',
        width: '90%',
        height: 'auto',
        paddingVertical: 26,
        borderRadius: 3
    },
    body:{
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#3c3c3c',
        backgroundColor: '#111',
        width: '90%',
        height: 'auto',
        alignItems: 'center',
        paddingVertical: 26,
        borderRadius: 3,
    },
    basicText: {
        color: '#fff',
        fontFamily: 'hey'
    },
    btn:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        width: '90%'
    }
});