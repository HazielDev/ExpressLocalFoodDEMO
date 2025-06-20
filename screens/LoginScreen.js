import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase";

export default function LoginScreen({navigation}){

    const [nombre, setNombre] = useState("");
    const [pass, setPass] = useState("");
    const [correo, setCorreo] = useState("");

    const handleSingUp = () => {
    createUserWithEmailAndPassword(auth, correo, pass)
        .then(userCreds => {
            const user = userCreds.user;
            console.log(`Registrado con: ${user.email}`);
            alert(`Usuario registrado con exito!`)
        })
        .catch(er => {alert(`Error al registrarse: ${er.message}`)})
    }   

    const handleLogin = () =>{
        signInWithEmailAndPassword(auth, correo, pass)
        .then(userCreds =>{
            const user = userCreds.user;
            console.log(`Se logeo con: ${user.email}`);    
        })
        .catch(er => alert(`Error al iniciar sesión ${er.message}`))
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace('HomeTabs', {screen: 'Perfil'});
            }
        })
        
        return unsuscribe;
    }, [])

    return(
        <View style={st.main}>
            <View style={{width: '90%', alignItems: 'center'}}>
                <Text style={{color: '#fff', fontFamily: 'heyo', fontSize: 30, textAlign: 'center'}}>Acceder con una cuenta</Text>
                <Text style={{color: '#fff', fontFamily: 'hey', textAlign: 'center'}}>Cree una cuenta o inicie sesión</Text>
            </View>
            <View style={st.boxLogin}>
                <TextInput placeholder="Correo" style={st.imp} onChangeText={setCorreo} placeholderTextColor={'grey'}></TextInput>
                <TextInput placeholder="Contraseña" style={st.imp} onChangeText={setPass} placeholderTextColor={'grey'} secureTextEntry={true}></TextInput>
                <TouchableOpacity onPress={handleLogin} style={st.btn}><Text style={{textAlign: 'center', color: '#111', fontFamily: 'heyo'}}>Iniciar Sesión</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleSingUp} style={st.btn}><Text style={{textAlign: 'center', color: '#111', fontFamily: 'heyo'}}>Registrarse</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const st = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111'
    },
    imp: {
        fontFamily: 'hey',
        color: '#fff',
        backgroundColor: '#111',
        width: '90%',
        paddingStart: 12,
        borderWidth: 1,
        borderColor: '#3c3c3c'
    },
    boxLogin:{
        marginTop: 32,
        paddingVertical: 64,
        backgroundColor: '#111',
        width: '90%',
        alignItems: 'center',
        gap: 16,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#3c3c3c'
    },
    btn:{
        backgroundColor: '#B1CC40',
        paddingVertical: 8,
        borderRadius: 3,
        width: '90%',
    },
});